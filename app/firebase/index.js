import firebase from "firebase";

try {
    const config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: "do-act",
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: "592625803168"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

const firebaseRef = firebase.database().ref();

export const githubProvider = new firebase.auth.GithubAuthProvider();
export default firebase;
export { firebaseRef }