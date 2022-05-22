import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDH0NG_DO3ylH2xn905IiS8Tke72gfEx4I",
    authDomain: "congreso-project.firebaseapp.com",
    projectId: "congreso-project",
    storageBucket: "congreso-project.appspot.com",
    messagingSenderId: "796843478919",
    appId: "1:796843478919:web:b56f9021f4e94494bd8d22"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(app);

export default firebase;
