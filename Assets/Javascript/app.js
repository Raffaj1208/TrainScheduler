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

  //..
  let name = "SHow";
  let destination = "yea";
  let firstTrain = "please";
  let frequency = 0;

  