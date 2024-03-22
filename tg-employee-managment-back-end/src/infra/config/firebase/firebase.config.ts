import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import credentials from "../../../../credentials.json";

initializeApp({
	credential: cert(credentials as ServiceAccount)
});

const firestoreDatabase = getFirestore();

export { firestoreDatabase };
