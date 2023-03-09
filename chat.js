// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDxpexGxQaL82sKRG6TyXZNRqgGtt1ZQPM",
    authDomain: "homework-project-100.firebaseapp.com",
    databaseURL: "https://homework-project-100-default-rtdb.firebaseio.com",
    projectId: "homework-project-100",
    storageBucket: "homework-project-100.appspot.com",
    messagingSenderId: "163411698184",
    appId: "1:163411698184:web:5efba9fe4e21ed6bcfa7bd"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";

    localStorage.setItem("user_name", user_name_input);

    document.getElementById("id").innerHTML = localStorage.getItem("username") ;
    
}



