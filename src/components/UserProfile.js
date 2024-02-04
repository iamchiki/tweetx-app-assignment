import React, { useContext, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import UserInfo from "./UserInfo";
import TweetxContext from "../store/context";
import { Toolbar } from "@mui/material";

const userDtlMenu = ["Posts", "Followers", "Following"];

const UserProfile = () => {
  const ctx = useContext(TweetxContext);
  // console.log(ctx.userProfile);
  return (
    <>
      <ProfileCard
        userDtlMenu={userDtlMenu}
        user={ctx.userProfile}></ProfileCard>
      <Toolbar />
      <UserInfo userDtlMenu={userDtlMenu}></UserInfo>
    </>
  );
};

export default UserProfile;
