import React, { useContext, useEffect, useState } from "react";
import TweetxContext from "../store/context";
import { List } from "@mui/material";
import UserDisplyaCard from "./UserDisplyaCard";
import useGetUserDtl from "../hooks/useGetUserDtl";

const FollowerList = () => {
  const ctx = useContext(TweetxContext);

  const { userDtlList } = useGetUserDtl(ctx?.userProfile?.followers);

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        margin: "0 auto",
      }}>
      {userDtlList?.map((user) => {
        let isFollowing = ctx?.userProfile?.following?.includes(user.id)
          ? true
          : false;

        return (
          <UserDisplyaCard
            isFollowing={isFollowing}
            user={user}></UserDisplyaCard>
        );
      })}
    </List>
  );
};

export default FollowerList;
