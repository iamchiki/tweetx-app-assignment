import { Container, Divider, List } from "@mui/material";

import React, { useContext } from "react";
import useGetUsersList from "../hooks/useGetUsersList";
import TweetxContext from "../store/context";

import UserDisplyaCard from "./UserDisplyaCard";

const Users = () => {
  const { userList } = useGetUsersList();

  const ctx = useContext(TweetxContext);

  return (
    <Container component="section" maxWidth="sm">
      <List
        sx={{
          width: "100%",

          bgcolor: "background.paper",
          margin: "0 auto",
        }}>
        {userList?.map((user) => {
          let isFollowing = ctx?.userProfile?.following?.includes(user.id)
            ? true
            : false;
          return (
            user.id !== ctx.userProfile.id && (
              <>
                <UserDisplyaCard
                  user={user}
                  isFollowing={isFollowing}
                  key={user.id}></UserDisplyaCard>
                <Divider
                  sx={{ marginLeft: 0, borderColor: "#0000004d" }}
                  variant="inset"
                  component="li"
                />
              </>
            )
          );
        })}
      </List>
    </Container>
  );
};

export default Users;
