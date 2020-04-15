// My API key. 
var APIKey = "647556cec464daa2f44a4723d07580eb";

// Here we are building the URL we need to query the database
var queryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + APIKey;

$(document).on("click","searchBtnEl",function(){
    event.preventDefault();

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
  
          // Log the queryURL
          console.log(queryURL);
  
          // Log the resulting object
          console.log(response);

    
});