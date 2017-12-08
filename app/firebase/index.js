import firebase from "firebase";

try {
    const config = {
        apiKey: "AIzaSyD7VIlOtd11vTl1VvxbLh9f3lO3pmfAXvU",
        authDomain: "do-act.firebaseapp.com",
        databaseURL: "https://do-act.firebaseio.com",
        projectId: "do-act",
        storageBucket: "do-act.appspot.com",
        messagingSenderId: "592625803168"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

const firebaseRef = firebase.database().ref();
export default firebase;
export { firebaseRef }