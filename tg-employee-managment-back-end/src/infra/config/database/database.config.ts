import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firebase/firebase.config";

const database = getFirestore(firebaseApp);

export { database };
