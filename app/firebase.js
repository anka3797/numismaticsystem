import * as firebase from 'firebase';

//  Initialize Firebase
const config = {
    apiKey: "AIzaSyAwY9nOf_c-l3MlLmt0ZkW-Cc939bLp_60",
    authDomain: "numis-557ae.firebaseapp.com",
    databaseURL: "https://numis-557ae.firebaseio.com",
    projectId: "numis-557ae",
    storageBucket: "numis-557ae.appspot.com",
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();