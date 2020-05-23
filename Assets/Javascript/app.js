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
  
  //..
  let dataRef = firebase.database();

  //
  let name = "testingName";
  let destination = "testingDest";
  let FirstTrainTime = "testingTime";
  let frequency = "testingFreq";
  
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

//
dataRef.ref().push({
name: name,
destination: destination,
FirstTrainTime: FirstTrainTime,
frequency: frequency,
dataAdded: firebase.database.ServerValue.TIMESTAMP
});
});

// Changed this to dataRef.ref().on because dataRef.on is not a function
dataRef.ref().on("child_added", function(childSnapshot) {
  $("#listDisplay").append("<div class='mainDisplay'><td class='infoName'> " +
  childSnapshot.val().name +
  " </td><td class='infoDest'> " + childSnapshot.val().destination +
  " </td><td class='infoFirst'> " + childSnapshot.val().FirstTrainTime +
  " </td><td class='infoFreq'> " + childSnapshot.val().frequency +
  " </td></div>");

});
// changed this to dataRef.ref() because database is not declared, I believe you ment dataRef
dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

  $("#displayName").text(snapshot.val().name);
  $("#displayDestination").text(snapshot.val().destination);
  $("#displayFirstTrain").text(snapshot.val().FirstTrainTime);
  $("#displayFrequency").text(snapshot.val().frequency);
});