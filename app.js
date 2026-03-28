import { messaging, getToken, onMessage } from "./firebase.js";

const vapidKey = "BHkkHL9mGD4YEINWadHYqv3IZLg3Y59sMyOBLSApbvFvStZoKsYSiCTqJXhTJ5Vz7htSoTZN2d5GZEXVcTO9GSE";

async function start() {
  try {
    // 🔥 Service Worker register
    const registration = await navigator.serviceWorker.register("firebase-messaging-sw.js");
    console.log("✅ Service Worker Registered");

    // 🔔 Notification permission
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("✅ Notification Permission Granted");

      // 🔑 Get Token
      const token = await getToken(messaging, {
        vapidKey: vapidKey,
        serviceWorkerRegistration: registration
      });

      if (token) {
        console.log("🔥 FCM Token:", token);

        // 📱 Mobile ke liye alert
        alert("🔥 TOKEN COPY KAR LO:\n\n" + token);
      } else {
        console.log("❌ No token found");
      }

    } else {
      alert("❌ Notification Permission Denied");
    }

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

start();

// 🔔 Foreground notification (jab site open ho)
onMessage(messaging, (payload) => {
  console.log("📩 Message Received:", payload);

  alert(
    "🔔 " + payload.notification.title + "\n\n" +
    payload.notification.body
  );
});
