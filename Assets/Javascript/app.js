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

//
dataRef().on("child_added", function(childSnapshot) {
  $("#full-member-list").append("<div class='mainDisplay'><td class='infoName'> " +
  childSnapshot.val().name +
  " </td><td class='infoDest'> " + childSnapshot.val().destination +
  " </td><td class='infoFirst'> " + childSnapshot.val().FirstTrainTime +
  " </td><td class='infoFreq'> " + childSnapshot.val().frequency +
  " </td></div>");

});
//..
database.ref().on("child_added", function(snapshot){
  let snap = snapshot.val();
  console.log(snap.name);
  console.log(snap.destination);
  console.log(snap.FirstTrainTime);
  console.log(frequency);

  //..
  $("#displayName").text(snap.name);
  $("#displayDestination").text(snap.destination);
  $("#displayFirstTrain").text(snap.FirstTrainTime);
  $("#displayFrequency").text(snap.frequency);
  //
});