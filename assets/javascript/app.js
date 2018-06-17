
// Array for button types
var carMake = ["acura", "bmw", "chrysler", "dodge", "fiat"];

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

$("#add-car").on("click", function(event) {
    event.preventDefault();
    var newCarMake = $("#car-input").val().trim();
    carMake.push(newCarMake);

    renderButtons();
});

function showGifs() {
    var car = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newCarMake +"key=TM1Ti97BZNzUM3NZraSrNAkGgwvIrkfi&limit=5" 
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    })  
}

renderButtons();


  

  
// SAMPLE ONLY!
// function displayGifs(){
//     var action = $(this).attr("data-name");
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=dc6zaTOxFJmzC&limit=10";
//     console.log(queryURL); // displays the constructed url
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//     })


// Add click listener to button on HTML page
// Inside listener, create variable called "Button Name"
// Target input box value



