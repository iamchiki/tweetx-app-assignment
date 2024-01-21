import { createContext } from "react";

const TweetxContext = createContext({
  currentUser: null,
  userProfile: {},
});

export default TweetxContext;
