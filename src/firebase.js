import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    query,
    where
} from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyAmnB4FrvzKZobK2zxzXcukYJ5qQoEuGvg",
  authDomain: "jewels-a-plenty.firebaseapp.com",
  projectId: "jewels-a-plenty",
  storageBucket: "jewels-a-plenty.firebasestorage.app",
  messagingSenderId: "264640278508",
  appId: "1:264640278508:web:16b10eab2c40c3f6895ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const jewelsCollectionRef = collection(db, "jewels")

export async function getJewels() {
    const querySnapshot = await getDocs(jewelsCollectionRef)
    const datArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    })) 
    return datArr
}
