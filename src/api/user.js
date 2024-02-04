import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const getUserById = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  return { id, ...docSnap.data() };
};
