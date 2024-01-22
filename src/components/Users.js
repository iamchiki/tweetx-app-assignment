import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import React from "react";
import useGetUsersList from "../hooks/useGetUsersList";

const Users = () => {
  const { userList } = useGetUsersList();
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
      }}>
      {userList?.map((user) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="" src="" />
              </ListItemAvatar>
              <ListItemText
                primary={user?.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"></Typography>
                    {user?.email}
                  </React.Fragment>
                }
              />
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#ef4c4a",
                  textTransform: "capitalize",
                }}
                variant="contained">
                Follow
              </Button>
            </ListItem>
            <Divider
              sx={{ marginLeft: 0, borderColor: "#0000004d" }}
              variant="inset"
              component="li"
            />
          </>
        );
      })}
    </List>
  );
};

export default Users;
