import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import  {firebaseApp, app}  from "./firebase.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if(user) {
        console.log('User is logged in.');
        location.replace("welcome.html");
    }
});
