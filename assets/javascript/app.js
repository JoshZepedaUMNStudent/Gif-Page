
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

$(document).on("click", ".car", function(event) {
    var newCarMake = event.currentTarget.dataset.name;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newCarMake + "&api_key=TM1Ti97BZNzUM3NZraSrNAkGgwvIrkfi&limit=5";
    
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response) {
        var data = response.data;
        $(".container").empty();
        for (var i = 0; i < data.length; i++) {
            var imageURL = data[i].images.fixed_height_still.url;
            var x = $('<img src="' + imageURL + '" />');
            $(".container").append(x);
        }
    });
});

renderButtons();

// Displaying the Gifs
  










  

  






