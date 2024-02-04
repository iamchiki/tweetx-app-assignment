import React, { useContext, useEffect, useState } from "react";
import TweetxContext from "../store/context";
import { List } from "@mui/material";
import UserDisplyaCard from "./UserDisplyaCard";
import useGetFollowersDtl from "../hooks/useGetFollowersDtl";

const FollowerList = () => {
  const ctx = useContext(TweetxContext);

  const { followerDtlList } = useGetFollowersDtl(ctx?.userProfile?.followers);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
      }}>
      {followerDtlList?.map((user) => {
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
