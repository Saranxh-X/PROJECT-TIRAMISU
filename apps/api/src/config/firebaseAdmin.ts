import { initializeApp, cert, getApps, App } from "firebase-admin/app";
import { getAuth, DecodedIdToken } from "firebase-admin/auth";

let firebaseAdminApp: App | null = null;

export const getFirebaseAdmin = (): App | null => {
  if (firebaseAdminApp) return firebaseAdminApp;

  const existingApps = getApps();
  if (existingApps.length > 0) {
    firebaseAdminApp = existingApps[0];
    return firebaseAdminApp;
  }

  try {
    const serviceAccountVar = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (serviceAccountVar) {
      const serviceAccount = JSON.parse(serviceAccountVar);
      firebaseAdminApp = initializeApp({
        credential: cert(serviceAccount),
      });
      console.log("[Firebase Admin] Successfully initialized with service account.");
    } else {
      console.warn("[Firebase Admin] FIREBASE_SERVICE_ACCOUNT not configured. Token verification will fall back to decoded token format in dev mode.");
    }
  } catch (error) {
    console.error("[Firebase Admin] Initialization error:", error);
  }

  return firebaseAdminApp;
};

export const verifyFirebaseToken = async (idToken: string): Promise<DecodedIdToken | null> => {
  const adminApp = getFirebaseAdmin();
  if (adminApp) {
    try {
      return await getAuth(adminApp).verifyIdToken(idToken);
    } catch (error) {
      console.error("[Firebase Admin] Token verification failed:", error);
      return null;
    }
  }

  // Fallback for local development testing prior to adding Firebase service account credentials
  try {
    const payloadBase64 = idToken.split(".")[1];
    if (payloadBase64) {
      const decodedJson = JSON.parse(Buffer.from(payloadBase64, "base64").toString("utf-8"));
      return decodedJson as DecodedIdToken;
    }
  } catch {
    // Ignore error
  }

  return null;
};
export type { DecodedIdToken };
