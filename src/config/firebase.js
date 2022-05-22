import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA805-BEAlCmkK_uiOwvpfWCHKkWnnKBWc",
  authDomain: "meetroom-3b3de.firebaseapp.com",
  projectId: "meetroom-3b3de",
  storageBucket: "meetroom-3b3de.appspot.com",
  messagingSenderId: "979189809722",
  appId: "1:979189809722:web:fa255db50f82ad5539ab03"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(app);

export default firebase;
