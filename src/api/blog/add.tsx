import { getFirestore, collection, addDoc } from "firebase/firestore"
import { TBlog } from "../../types/blog/index.type";
import { firebaseDb } from "../firebase";

const addBlog = async (blog: TBlog) => {
    return addDoc(collection(firebaseDb, "blogs"), blog);
}

export default addBlog