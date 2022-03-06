import { signInWithEmailAndPassword } from "@firebase/auth";
import { TUser } from "../../types/auth/index.type";
import { firebaseAuth, firebaseDb } from "../firebase";
import { addDoc, collection, doc, getDoc, query, where } from "firebase/firestore";

export const loginApi = async (user: TUser) => {
    const userCredential: any = await signInWithEmailAndPassword(firebaseAuth, user.email, user.password)
    const docRef = doc(firebaseDb, "users", userCredential.user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            user: docSnap.data(),
            accessToken: userCredential.user.accessToken
        }
    } else {
        return null
    }
}