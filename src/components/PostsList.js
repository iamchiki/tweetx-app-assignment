import React, { useContext } from "react";
import TweetxContext from "../store/context";
import { Container, List } from "@mui/material";
import UserPostCard from "./UserPostCard";

const PostsList = () => {
  const ctx = useContext(TweetxContext);
  console.log(ctx);
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        margin: "0 auto",
      }}>
      {ctx?.userProfile?.posts?.map((post) => {
        return (
          <UserPostCard
            user={ctx.userProfile}
            elevation={0}
            userPost={post}></UserPostCard>
        );
      })}
    </List>
  );
};

export default PostsList;
