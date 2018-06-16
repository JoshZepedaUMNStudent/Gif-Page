
// Array for button types
var carMake = ["Acura", "BMW", "Chrysler", "Dodge", "Fiat"];

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

// function displayGifButtons(){
//     $("#gifButtonsView").empty(); 
//     for (var i = 0; i < actions.length; i++){
//         var gifButton = $("<button>");
//         gifButton.addClass("action");
//         gifButton.addClass("btn btn-primary")
//         gifButton.attr("data-name", actions[i]);
//         gifButton.text(actions[i]);
//         $("#gifButtonsView").append(gifButton);

  




// Add click listener to button on HTML page
// Inside listener, create variable called "Button Name"
// Target input box value



