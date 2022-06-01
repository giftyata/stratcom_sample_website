
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
  db = firebase.firestore();

  
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




//register new records
  db.collection("users").add({
    surname: document.getElementById('surname2').value,
    lastname: document.getElementById('lastname2').value,
    gender: document.getElementById('gender2').value,
    phone: document.getElementById('phone2').value,
    useremail: document.getElementById('username2').value,
    password: document.getElementById('password2').value,
    password_repeat: document.getElementById('repeat2').value,
    

})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);

    alert("your table has been created!!!");
  window.location.href ="index.html";

})
.catch((error) => {
    console.error("Error adding document: ", error);
});

  }
/*
//retrieve user information

  function readData(){
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        product = doc.data();
        div_ref = document.getElementById('Tohold');
        div_ref.innerHTML +=  `
        <div class "name">${product.surname}${product.lastname}</div>
        `
  
          console.log(`${doc.id} => ${doc.data()}`);
      });
  });
  }
*/
  //retrieve user information inform of a table

  function readData(){
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        product = doc.data();
        me_ref = document.getElementById('Tohold');
        you_ref.innerHTML +=  `
        <div class "name">${product.surname}${product.lastname}</div>
        `
  
          console.log(`${doc.id} => ${doc.data()}`);
      });
  });
  }


 