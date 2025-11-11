// initialize Firebase and begin using the SDKs for the products you'd like to use.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const serviceAccount = require('./pookiewears-52a2f-firebase-adminsdk-fbsvc-cf17d854d3.json');

require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = admin.firestore();
const analytics = getAnalytics(app);

export { db, analytics };