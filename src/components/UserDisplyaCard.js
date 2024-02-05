import React, { useContext, useState } from "react";

import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import TweetxContext from "../store/context";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const UserDisplyaCard = ({ user, isFollowing }) => {
  const [following, setfollowing] = useState(isFollowing);
  const ctx = useContext(TweetxContext);

  const followHandler = async (id) => {
    try {
      // update current user following list
      ctx.userProfile = {
        ...ctx.userProfile,
        following: [...ctx.userProfile.following, id],
      };
      const userFollowingRef = doc(db, "users", ctx.currentUser.uid);

      // update firebase db with updated following list current user
      await updateDoc(userFollowingRef, {
        following: [...ctx.userProfile.following],
      });
      // update isFollowing state for particuler user in list
      setfollowing(true);

      // update firebase db with updated followers list of following user
      const followerDocRef = doc(db, "users", id);
      const followerDocSnap = await getDoc(followerDocRef);

      await updateDoc(followerDocRef, {
        followers: [...followerDocSnap.data().followers, ctx.currentUser.uid],
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              sx={{ textTransform: "capitalize" }}
              component="span"
              variant="body1">
              {user?.name}
            </Typography>
          }
          secondary={`Following:${user?.following?.length}`}
        />
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#ef4c4a",
            textTransform: "capitalize",
          }}
          variant="contained"
          onClick={() => {
            followHandler(user.id);
          }}
          disabled={following}>
          {following ? "Following" : "Follow"}
        </Button>
      </ListItem>
    </>
  );
};

export default UserDisplyaCard;
