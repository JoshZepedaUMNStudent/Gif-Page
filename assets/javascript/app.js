
// Array for button types
var carMake = ["acura", "bmw", "chrysler", "dodge", "fiat"];

// Buttons for Gifs
function renderButtons() {

    $("#cars-view").empty();

    for (var i = 0; i < carMake.length; i++) {
        var x = $("<button>");
        x.addClass("car");
        x.attr("data-name", carMake[i]);
        x.text(carMake[i]);
        $("#cars-view").append(x);
    }
}

// Input Field for New Car
$("#add-car").on("click", function(event) {
    event.preventDefault();
    var newCarMake = $("#car-input").val().trim();
    carMake.push(newCarMake);

    renderButtons();
});

renderButtons();

// Displaying the Gifs
var newCarMake = $("#car-input").val().trim();  //??????????
var gueryURL = "http://api.giphy.com/v1/gifs/search?q=" + newCarMake + "&api_key=TM1Ti97BZNzUM3NZraSrNAkGgwvIrkfi&limit=5";
 
$.ajax({
    url: queryURL,
    method:"GET"
}).then(function(response) {
    var tBody = $("tbody");
    var tRow = $("<tr>");

    var columnOneTD = $("<td>").text(response);
    var columnTwoTD = $("<td>").text(response);
    var columnThreeTD = $("<td>").text(response);
    var columnFourTD = $("<td>").text(response);
    var columnFiveTD = $("<td>").text(response);
    tRow.append(columnOneTD, columnTwoTD, columnThreeTD, columnFourTD, columnFiveTD);
    tBody.append(tRow);
});







// SAMPLE ONLY!
// var movie = "Mr. Nobody";
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   var tBody = $("tbody");
//   var tRow = $("<tr>");

//   var titleTd = $("<td>").text(response.Title);
//   var yearTd = $("<td>").text(response.Year);
//   var actorsTd = $("<td>").text(response.Actors);
//   tRow.append(titleTd, yearTd, actorsTd);
//   tBody.append(tRow);
// });

// SAMPLE ONLY!
// function showGifs() {
//     var car = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newCarMake +"key=TM1Ti97BZNzUM3NZraSrNAkGgwvIrkfi&limit=5" 
//     console.log(queryURL);
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//     })  
// }

  

  






