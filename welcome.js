import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import  {app}  from "./firebase.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if(!user) {
        location.replace("index.html");
    } else {
        document.getElementById("message").innerHTML = 'Hey, ' + user.email;
    }
});

document.getElementById("logout-btn").onclick = function() { 
    signOut(auth).then(() => {
    }).catch((error) => {
      const errorMessage = error.message;
    }); 
};