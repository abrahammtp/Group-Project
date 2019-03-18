//// FRANCISCO RECIPE API
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDEmxMDDijs5LUlrmYMNv36_Nlx5ipH-Ls",
    authDomain: "gmt-fitness.firebaseapp.com",
    databaseURL: "https://gmt-fitness.firebaseio.com",
    projectId: "gmt-fitness",
    storageBucket: "",
    messagingSenderId: "273381506828"
  };
  firebase.initializeApp(config);
        var recipesearch;
        $(document).ready(function () {
            var recipesearch;
            /// maintain PAGE
        
            $("#add-recipe").on("click", function (event) {
                $("#recipes").empty();
                event.preventDefault();
        
                recipesearch = $("#recipeinput").val().trim();
        
        
                console.log("hello")
        
                console.log(recipesearch)
                var newqueryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + recipesearch + "&app_id=a8657a0b&app_key=acd4055d85d009d439ef0099280377ef&from=0&to=4&calories=500-700"
        
                $.ajax({
                    url: newqueryURL,
                    method: "GET"
                }).then(function (response) {
        
                    var results = response.hits
                    console.log(results)
        
                    $("#recipes").html("<h3>Click an image to go to the recipe!</h3>")
        
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
        $(".exercise-videos").empty();

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

                var dataVideo = $("<div class='carousel-item-active'><div class='embed-responsive embed-responsive-4by3'><iframe class='embed-responsive-item' iframe width='445' height='315' src='https://www.youtube.com/embed/" + results[i].id.videoId + "' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div>");

                $(".exercise-videos").append(dataVideo);
            }

        });

        $("#exercise-input").val("");
    })

})



