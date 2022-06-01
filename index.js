
  // Import the functions you need from the SDKs you need
 // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
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
  db = firebase.firestore();



/*
  // login function

  function login1(){
    email = document.getElementById('username1').value,
    password = document.getElementById('password1').value

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;

    alert("logged in successfully!!!");
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
  function log1(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert("logout in successfully!!!");
    window.location.href ="login.html";
      }).catch((error) => {
        // An error happened.
      });
  }


  
  // register function

  function register2(){
    email = document.getElementById('username2').value,
    password = document.getElementById('password2').value,

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Success 
    var user = userCredential.user;
    alert("your accouny has been created!!!");
    window.location.href ="index.html";

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("creating failed" &errorMessage);
    // on fail
  });
  }


  // reset password function 


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


  // close function
  function close1(){

  }

*/


function readData(){
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      product = doc.data();
      div_ref = document.getElementById('Tohold');
      div_ref.innerHTML +=  `
      <div class "name">${product.surname}</div>
      `

        console.log(`${doc.id} => ${doc.data()}`);
    });
});
}


function readTable(){
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      product = doc.data();
      table_ref = document.getElementById('table').getElementsByTagName('tbody')[0];
      newRow = table_ref.insertRow(-1);
      newRow.innerHTML +=  `
      <tr>
       <td>${product.surname}</td>
       <td>${product.lastname}</td>
      </tr>
      `

        console.log(`${doc.id} => ${doc.data()}`);
    });
});

}


// sticky

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}