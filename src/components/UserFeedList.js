import React, { useContext } from "react";
import TweetxContext from "../store/context";
import { Container, List } from "@mui/material";
import UserPostCard from "./UserPostCard";
import useGetUserDtl from "../hooks/useGetUserDtl";
import { getUserFeed } from "../api/user";

const UserFeedList = () => {
  const ctx = useContext(TweetxContext);
  const { userDtlList } = useGetUserDtl(ctx?.userProfile?.following);

  console.log(getUserFeed(userDtlList));
  return (
    <Container component="section" maxWidth="sm">
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          margin: "0 auto",
        }}>
        {getUserFeed(userDtlList).map((obj) => {
          return (
            <UserPostCard
              user={obj}
              elevation={4}
              userPost={obj}></UserPostCard>
          );
        })}
      </List>
    </Container>
  );
};

export default UserFeedList;
