
//Array that will show the initial buttons on the page.//
var initialSearch = ["Shark", "Panther", "Elephant"];

//Function to add buttons into page//
function createButtons(initialSearch, classToAdd, placeToAdd) {
    //this function VV clears the search box after the name is added in the gif list//
    $(placeToAdd).empty();

    for (var i = 0; i < initialSearch.length; i++) {

        var newButton = $("<button>");

        newButton.addClass(classToAdd);
        //add the data type attribute from the items array into the button//
        newButton.attr("data-type", initialSearch[i]);
        //adds an animal name from the array into new button//
        newButton.text(initialSearch[i]);
        //appends the button to html page//
        $(placeToAdd).append(newButton);

    }
}

//this function calls the initialSearch array and adds a class of 'searchButton' to each array item,//
// then injects the buttons to the html page//

$(function () {

    createButtons(initialSearch, "searchButton", "#buttons-list")

});

// this targets when one of the buttons is pressed//
$(document).on("click", ".searchButton", function () {

    $("#results").empty();

    var type = $(this).data("type");

    // console.log(type);

    //API query with 10 results limit//

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10"

    //AJAX call//
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            //for loop to display gifs in html document/
            for (var i = 0; i < response.data.length; i++) {
                //create a new div for gif picture//
                var gifDiv = $("<div class='gif-item'>");
                //var that calls the rating of gif
                var rating = response.data[i].rating;
                //var that shows the rating on a <p> tag in the html document//
                var showRating = $("<p>").text("Rating: " + rating);
                //var that will create a <img> tag where the gif will be apppended to//
                var gifPic = $("<img>");
                //variable for animated and still state for gif image//
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                //attributes for gifPic//
                gifPic.attr("src", still);
                gifPic.attr("data-still", still);
                gifPic.attr("data-animated", animated);
                gifPic.attr("data-state", "still");

                //add a class in the gifpic "<img>"  for element state manipulation//
                gifPic.addClass("resultGif");

                //this wil append the gif and rating into the html doc//
                gifDiv.append(showRating);
                gifDiv.append(gifPic);

                //this will append the search results on the html doc//
                $("#results").append(gifDiv);

            }

        })
})
//animated and still function//
$(document).on("click", ".resultGif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {

        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "animated");
    }
    else{

        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
})
//click event
$(document).on("click", "")
// click event to add button from search//
$("#addButton").on("click", function () {

    var newButton = $("input").eq(0).val();
    initialSearch.push(newButton);
    createButtons(initialSearch, "searchButton", "#buttons-list");
    return false;

})