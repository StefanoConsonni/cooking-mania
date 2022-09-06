import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAoUGSCFlgYhqnOAJPidwYR4Dte-ihUnYw",
	authDomain: "cooking-mania-4f8f7.firebaseapp.com",
	projectId: "cooking-mania-4f8f7",
	storageBucket: "cooking-mania-4f8f7.appspot.com",
	messagingSenderId: "1041671559980",
	appId: "1:1041671559980:web:a6310910c39840eb2f6a89",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
