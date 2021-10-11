    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
    
    // Your web app's Firebase configuration
    const firebaseApp = {
        apiKey: "AIzaSyA394P4drJamyaskMaRMGPLX4WKS2nZn3s",
        authDomain: "fir-auth-2799e.firebaseapp.com",
        projectId: "fir-auth-2799e",
        storageBucket: "fir-auth-2799e.appspot.com",
        messagingSenderId: "554718181801",
        appId: "1:554718181801:web:d39effb1f283acb50d2cb8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseApp);

    export {firebaseApp, app};