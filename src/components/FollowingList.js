import React, { useContext } from "react";
import TweetxContext from "../store/context";

import { List } from "@mui/material";
import UserDisplyaCard from "./UserDisplyaCard";
import useGetUserDtl from "../hooks/useGetUserDtl";

const FollowingList = () => {
  const ctx = useContext(TweetxContext);
  const { userDtlList } = useGetUserDtl(ctx?.userProfile?.following);

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        margin: "0 auto",
      }}>
      {userDtlList?.map((user) => {
        return (
          <UserDisplyaCard
            isFollowing={true}
            user={user}
            key={user?.id}></UserDisplyaCard>
        );
      })}
    </List>
  );
};

export default FollowingList;
