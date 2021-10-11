import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import  {app}  from "./firebase.js";

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
    });
});

document.getElementById("signup").onclick = function() {  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message;
    });
};