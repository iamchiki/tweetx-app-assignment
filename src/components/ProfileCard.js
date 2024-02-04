import { Avatar, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";

const ProfileCard = ({ userDtlMenu, user }) => {
  console.log(user);
  return (
    <>
      <Container
        sx={{ display: "flex", justifyContent: "space-evenly" }}
        component="section"
        maxWidth="sm">
        <Avatar sx={{ width: "8rem", height: "8rem" }} alt="" src="" />
        <Container component="div">
          <Typography
            variant="h5"
            component="div"
            sx={{ textTransform: "capitalize" }}>
            {user.name}
          </Typography>
          <List sx={{ display: "flex", color: "#bcb4b4" }}>
            {userDtlMenu.map((item) => {
              return (
                <ListItem sx={{ paddingLeft: 0 }}>
                  <Typography variant="body2" component="div">
                    {`${item} : ${user[item.toLowerCase()]?.length}`}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </Container>
    </>
  );
};

export default ProfileCard;
