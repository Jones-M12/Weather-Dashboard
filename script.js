// My API key. 
var APIKey = "647556cec464daa2f44a4723d07580eb";

// Here we are building the URL we need to query the database
//var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + APIKey;
$(document).ready(function(){
    
    $("#searchBtnEl").on("click",function(event){
        var cityName= $("#inputEl").val();
       getCurrentWeather(cityName);
       getForecast(cityName);

    })


    function getCurrentWeather(cityName) {

            // Here we are building the URL we need to query the database
    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          // We store all of the retrieved data inside of an object called "response"
          // Log the queryURL
  
          // Log the resulting object
          console.log(response);
  
          // Transfer content to HTML
          var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
          $("#cityName").text(response.name + " (" + new Date().toLocaleDateString() + ")").append(img);
               // Convert the temp to fahrenheit
          var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  
          // add temp content to html
          
          $("#temp").text("Temperature: " + response.main.temp + "F" );
          $("#hum").text("Humidity: " + response.main.humidity +"%");
          $("#speed").text("Wind Speed: " + response.wind.speed +"MPH");
          getUVIndex(response.coord.lat, response.coord.lon);
        });

        
    }



    function getUVIndex(lat, lon) {

        // Here we are building the URL we need to query the database
var queryURL =`http://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

    if(response.value < 3){
       var span = $('<span>').text(response.value).addClass('btn btn-xs btn-success');
       $('#uv').text("Uv Indeex: ").append(span);

    } else if(response.value < 7){
        var span = $('<span>').text(response.value).addClass('btn btn-xs btn-warning');
        $('#uv').text("Uv Indeex: ").append(span);
    } else {
        var span = $('<span>').text(response.value).addClass('btn btn-xs btn-danger');
        $('#uv').text("Uv Indeex: ").append(span);
    }


    });

}

function getForecast(cityName) {

    // Here we are building the URL we need to query the database
var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;

$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
  // We store all of the retrieved data inside of an object called "response"
  // Log the queryURL

  // Log the resulting object
  console.log(response);

//   $("#forecast").text("<h5>5 Day Forecast: </h5>") ::: attempting to create 5day forecast results lines 92-100
    
    response.list.main.forEach(res =>{
        var col= $('<div class="col-1.5 ">');
    });

    // var date= $('<span class="card-title">').text(res.list.main.dt_txt);

   $("#forecast").append(col)
});

}











});