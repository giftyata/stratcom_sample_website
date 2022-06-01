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

  function reset1(){
    email = document.getElementById('useremail1').value
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("password reset link sent successfully, check your email to put a new password");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert("password reset link failed" +errorMessage);
  });
    
  }