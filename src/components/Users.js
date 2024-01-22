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
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";

const Users = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      const users = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      // console.log(querySnapshot);
      console.log(users);
      setUserList(users);
    };
    fetchUsers();
  }, []);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
      }}>
      {userList.map((user) => {
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
