import {
  Paper,
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { convertUserTimestampToPeriod } from "../api/user";

const UserPostCard = ({ user, elevation, userPost }) => {
  const totalMillisecond = Date.now() - userPost.postTimestamp;

  return (
    <Paper elevation={elevation} sx={{ mb: "1rem" }}>
      <ListItem alignItems="flex-start" sx={{ padding: "1rem" }}>
        <ListItemAvatar>
          <Avatar alt="" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              sx={{ textTransform: "capitalize" }}
              component="span"
              variant="h6">
              {user.name}
            </Typography>
          }
          secondary={
            <Typography component="p" variant="body2">
              {userPost.post}
            </Typography>
          }
        />
        <Typography component="span" variant="caption" sx={{ flexShrink: "0" }}>
          {convertUserTimestampToPeriod(totalMillisecond)}
        </Typography>
      </ListItem>
    </Paper>
  );
};

export default UserPostCard;
