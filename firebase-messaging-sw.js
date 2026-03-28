importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBva2ac11CEkPsNQcBuIsz0wbNHINGUM6Q",
  authDomain: "yoga-app-aa13a.firebaseapp.com",
  projectId: "yoga-app-aa13a",
  messagingSenderId: "479595931859",
  appId: "1:479595931859:web:297bd00eae60869c044c26"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
  });
});