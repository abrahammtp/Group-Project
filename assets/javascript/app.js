var config = {
    apiKey: "AIzaSyDEmxMDDijs5LUlrmYMNv36_Nlx5ipH-Ls",
    authDomain: "gmt-fitness.firebaseapp.com",
    databaseURL: "https://gmt-fitness.firebaseio.com",
    projectId: "gmt-fitness",
    storageBucket: "",
    messagingSenderId: "273381506828"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// Initial Values
var subscribe = "";
// var email = "";
// var goalsText = "";
// Capture Button Click
$("#subscibe").on("click", function(event) {
  event.preventDefault();


  // Grabbed values from text boxes
  subscribe = $("#subscribe").val().trim();
  // contact = $("#contact").val().trim();
  // Code for handling the push
  database.ref().push({
    subscribe: subscribe,
    // contact: contact,
  });
});

// $("#contact-submit").on("click", function(event){
//     console.log("Click");
//     event.preventDefault();

//     email = $("#email").val().trim();
//     // helpForm = $("#exampleFormControlSelect1").val();
//     goalsText = $("#exampleControlTextArea1").val().trim();

//     database.ref().push({
//         email: email,
//         // helpForm: helpForm,
//         goalsText: goalsText,
//     });
// });

