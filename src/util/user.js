import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const getUserById = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  return { id, ...docSnap.data() };
};

export const convertUserTimestampToPeriod = (miliseconds) => {
  let days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);

  if (days !== 0) {
    return `${days} days ago`;
  } else if (hours !== 0) {
    return `${hours} hrs ago`;
  } else if (minutes !== 0) {
    return `${minutes} mins ago`;
  } else {
    return `${seconds} sec ago`;
  }
};

export const getUserFeed = (followingUser) => {
  let arr = [];
  followingUser.forEach((user, i) => {
    arr = [
      ...arr,
      ...user.posts.map((post) => {
        return { name: user.name, ...post };
      }),
    ];
  });
  return arr.sort((a, b) => b.postTimestamp - a.postTimestamp);
};
