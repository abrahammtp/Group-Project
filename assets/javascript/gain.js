//// FRANCISCO RECIPE API

var restrictions;
var calories;
        // Calories to build 2700-2800; Calories to Maintain 2200-2600; Calories to Lose 1900-2100

var search;


$(document).ready(function () {

/// GAIN PAGE

    var gainqueryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=high-protein&app_id=19a5b37e&app_key=4dfc6f3ac6f5ba472fd75d9f42924272&from=0&to=4&calories=2700-2800"

    $.ajax({
       url: gainqueryURL,
       method: "GET"
    }).then(function(response){
        var results = response.hits
        console.log(results)
        
        for (var i = 0; i < results.length; i++) {

            var dataImage = $("<img>");
            dataImage.attr("src", results[i].recipe.image)
            // dataImage.attr("href ='",  results[i].recipe.url);


            var newItemdiv = $('<div class="newItem">');
            var link = $("<a href='" + results[i].recipe.url + "' target='_blank'>").append(


                newItemdiv.append(dataImage),

            )
            $("#recipes").append(results[i].recipe.label + " Recipe:")
            $("#recipes").append(link)
            $('#recipe-input').val("");

    }
})

    $("#add-recipe").on("click", function (event) {
        $("#recipes").empty();
        event.preventDefault();

        search = $("#recipeinput").val().trim();


        console.log("hello")

        console.log(search)
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + search + "&app_id=19a5b37e&app_key=4dfc6f3ac6f5ba472fd75d9f42924272&from=0&to=4"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.hits
            console.log(results)



            for (var i = 0; i < results.length; i++) {

                var dataImage = $("<img>");
                dataImage.attr("src", results[i].recipe.image)
                dataImage.addClass("recipeimages")

                var newItemdiv = $('<div class="newItem">');
                var link = $("<a href='" + results[i].recipe.url + "' target='_blank'>");
                var recipetext = ("<p id='recipetext'>" + results[i].recipe.label + " Recipe: </p>")
                        
                
                link.append(newItemdiv)
                newItemdiv.append(recipetext)
                newItemdiv.append(dataImage)


                $("#recipes").append(link)
                $('#recipeinput').val("");
            }
        });

    });

});

/// FRANCISCO END RECIPE API


// Abraham's work, YouTube's API

var search;

$(document).ready(function () {

    $("#add-exercise").on("click", function (event) {
        event.preventDefault();

        search = $("#exercise-input").val().trim();
        console.log("hello " + search);

        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=" + search + "&relevanceLanguage=en&safeSearch=none&topicId=%2Fm%2F027x7n&type=video&videoCaption=none&videoCategoryId=17&videoDefinition=any&videoDimension=any&videoDuration=medium&videoEmbeddable=true&key=AIzaSyB-DpMfCWMG2x1j2BpAIGxFMhATO4zE5jg";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.items;
            console.log(results);

            for (let i = 0; i < results.length; i++) {

                var dataVideo = $("<div class='carousel-item'><div class='embed-responsive embed-responsive-4by3'><iframe width='560' height='315' class='embed-responsive-item' src='https://www.youtube.com/embed/" + results[i].id.videoId + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div>");

                $(".carousel-inner").append(dataVideo);
            }
        
        });

        $("#exercise-input").val("");
    })
})



