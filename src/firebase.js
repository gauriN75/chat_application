import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNmuIh2oR2FZSIXX-v5sLuQsAtUHoEP3Y",
  authDomain: "chat-f9664.firebaseapp.com",
  projectId: "chat-f9664",
  storageBucket: "chat-f9664.appspot.com",
  messagingSenderId: "636799637362",
  appId: "1:636799637362:web:4ff778b0b0aa223f7cefeb"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();