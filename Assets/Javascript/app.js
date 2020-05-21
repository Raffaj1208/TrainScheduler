  //.. Init
  let name = "testingName";
  let destination = "testingDest";
  let FirstTrainTime = "testingTime";
  let frequency = "testingFreq";
$("#displayName").text(name);
$("#displayDestination").text(destination);
$("#displayFirstTrain").text(FirstTrainTime);
$("#displayFrequency").text(frequency);

//.. Function on Submit button CLick
$("#submit").on("click", function(){
  event.preventDefault();
//.. Name ..//
  name = $("#name-input").val().trim();
  $("#displayName").text(name);
  //.. Destination ..//
  destination = $("#destination-input").val().trim();
  $("#displayDestination").text(destination);
  //.. FirstTrain Time..//
FirstTrainTime = $("#firstTrain-input").val().trim();
$("#displayFirstTrain").text(FirstTrainTime);
  //.. Frequency ..//
frequency = $("#frequency-input").val().trim();
$("#displayFrequency").text(frequency);
});

//.. Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyB7KtHLRHH1j6TP0OT2YiRkVGh_8cyxrrA",
    authDomain: "trainscheduler-ba1c3.firebaseapp.com",
    databaseURL: "https://trainscheduler-ba1c3.firebaseio.com",
    projectId: "trainscheduler-ba1c3",
    storageBucket: "trainscheduler-ba1c3.appspot.com",
    messagingSenderId: "319855585835",
    appId: "1:319855585835:web:c6093e236d664c7b12186e",
    measurementId: "G-XZ0XJBDY5G"
  };
  //.. Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //..
  let dataBase = firebase.database();
