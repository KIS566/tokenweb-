import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyBva2ac11CEkPsNQcBuIsz0wbNHINGUM6Q",
  authDomain: "yoga-app-aa13a.firebaseapp.com",
  projectId: "yoga-app-aa13a",
  storageBucket: "yoga-app-aa13a.firebasestorage.app",
  messagingSenderId: "479595931859",
  appId: "1:479595931859:web:297bd00eae60869c044c26"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export { getToken, onMessage };