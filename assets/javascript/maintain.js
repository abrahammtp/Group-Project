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
            var newqueryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + recipesearch + "&app_id=19a5b37e&app_key=4dfc6f3ac6f5ba472fd75d9f42924272&from=0&to=4&calories=1800-2000"
    
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
            $(".videos").empty();
    
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
    
                    var card = $("<div class='card' style='width: 400'>");
                    var cardBody = $("<div class='card-body'>");
                    var video = $("<div class='card-video'>");
                    var dataVideo = $("<iframe class='embed-responsive-item' iframe width='425' height='335' src='https://www.youtube.com/embed/" + results[i].id.videoId + "' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    
                    card.append(cardBody, video, dataVideo);
                    $(".videos").append(card);
                }
    
            });
    
            $("#exercise-input").val("");
        })
    
    })



