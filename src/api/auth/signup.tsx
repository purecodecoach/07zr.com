import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { TUser } from "../../types/auth/index.type";
import { firebaseAuth, firebaseDb } from "../firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

export const signupApi = async (user: TUser) => {
    let newUser;
    const userCredential: any = await createUserWithEmailAndPassword(firebaseAuth, user.email, user.password)
    newUser = {
        uid: userCredential.user.uid,
        refreshToken: userCredential.user.stsTokenManager.refreshToken,
        name: user.name,
        email: user.email,
        role: "cu",
    };

    const usersRef = collection(firebaseDb, "users");

    await setDoc(doc(usersRef, userCredential.user.uid), newUser);

    return {
        user: newUser,
        accessToken: userCredential.user.accessToken
    }
};