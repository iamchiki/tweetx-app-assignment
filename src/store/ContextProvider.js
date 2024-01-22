import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase-config";
import TweetxContext from "./context";
import { doc, getDoc } from "firebase/firestore";

const ContextProvider = (props) => {
  const [user, setUser] = useState();
  const [profileData, setProfileData] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user) {
      const fetchUser = async () => {
        const docRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        setProfileData(docSnap.data());
        // ctx.userProfile = docSnap.data();
      };
      fetchUser();
    }
  }, [user]);
  const initialValues = {
    currentUser: user,
    userProfile: { ...profileData },
  };
  return (
    <TweetxContext.Provider value={initialValues}>
      {props.children}
    </TweetxContext.Provider>
  );
};

export default ContextProvider;
