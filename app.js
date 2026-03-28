import { messaging, getToken, onMessage } from "./firebase.js";

const vapidKey = "BHkkHL9mGD4YEINWadHYqv3IZLg3Y59sMyOBLSApbvFvStZoKsYSiCTqJXhTJ5Vz7htSoTZN2d5GZEXVcTO9GSE";

async function start() {

  // ✅ SERVICE WORKER REGISTER
  const registration = await navigator.serviceWorker.register("firebase-messaging-sw.js");
  console.log("Service Worker Registered ✅");

  const permission = await Notification.requestPermission();

  if (permission === "granted") {

    const token = await getToken(messaging, {
      vapidKey: vapidKey,
      serviceWorkerRegistration: registration   // 👈 IMPORTANT
    });

    console.log("🔥 Token:", token);

  } else {
    alert("Permission denied ❌");
  }
}

start();

// foreground notification
onMessage(messaging, (payload) => {
  alert(payload.notification.title + "\n" + payload.notification.body);
});