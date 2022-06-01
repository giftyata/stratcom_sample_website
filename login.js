
  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDObb0uLTSTPhA6TOSAnrmgBLO9YG_57Us",
    authDomain: "yatz-technologies.firebaseapp.com",
    projectId: "yatz-technologies",
    storageBucket: "yatz-technologies.appspot.com",
    messagingSenderId: "352643085048",
    appId: "1:352643085048:web:7470759e6839d8a63d410d",
    measurementId: "G-HY7ZMXGJEW"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function login1(){
    email = document.getElementById('username1').value,
    password = document.getElementById('password1').value

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;

    //alert("logged in successfully!!!");
    window.location.href ="myAccount.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("login in failed" +errorMessage);
  });
    
  }

  // logout function
  function logout1(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  // close function
  function close1(){



  }


  // forgot password function