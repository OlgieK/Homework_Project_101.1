
function getData()
{ firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = " " ;
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey ;
    console.log("Room name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' > #"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
});
});
}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"

    });

    localStorage.getItem("room_name", room_name);

    window.location = ".html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", room);
    window.location = ".html";
}