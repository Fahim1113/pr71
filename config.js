import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBw0f3vjdZ8nwS0t6M81e8ukP1f_bVvzMg",
  authDomain: "pro71-8dafc.firebaseapp.com",
  projectId: "pro71-8dafc",
  storageBucket: "pro71-8dafc.appspot.com",
  messagingSenderId: "352684019381",
  appId: "1:352684019381:web:fdc3b6d7c4a03a9421f8fc"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

