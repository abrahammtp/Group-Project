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
var contact = ""
var email = "";
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
$("#contact").on("click", function(event){
  event.preventDefault();

  contact = $("#contact").val().trim();
  email = $("#email").val().trim();
  
  database.ref().push({
    contact: contact,
    email: email,
  })
})