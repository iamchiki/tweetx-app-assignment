import { createContext } from "react";

const TweetxContext = createContext({
  currentUser: null,
  userProfile: {
    id: "",
    name: "",
    email: "",
    posts: [],
    followers: [],
    following: [],
  },
});

export default TweetxContext;
