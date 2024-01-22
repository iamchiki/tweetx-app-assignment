import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebase-config";

const useGetUsersList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      const users = querySnapshot.docs.map((doc) => {
        return doc.data();
      });

      setUserList(users);
    };
    fetchUsers();
  }, []);
  return { userList };
};

export default useGetUsersList;
