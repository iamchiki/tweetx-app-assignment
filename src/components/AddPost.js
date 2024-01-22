import { Box, Button, TextareaAutosize } from "@mui/material";
import React, { useContext, useRef } from "react";
import TweetxContext from "../store/context";
import { db } from "../firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";

const AddPost = () => {
  const ctx = useContext(TweetxContext);

  const postRef = useRef("");
  const postSubmitHandler = async (e) => {
    try {
      if (postRef.current.value === "") {
        throw new Error("Please Write post");
      }
      // update userprofile state
      ctx.userProfile = {
        ...ctx.userProfile,
        posts: [...ctx.userProfile.posts, postRef.current.value],
      };
      const userPostRef = doc(db, "users", ctx.currentUser.uid);

      // update firebase db wiht updated state
      await updateDoc(userPostRef, {
        posts: [...ctx.userProfile.posts],
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
      }}>
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "#ef4c4a",
          textTransform: "capitalize",
          display: "block",
        }}>
        Write
      </Button>
      <Box component="div" sx={{}}>
        <TextareaAutosize
          minRows={3}
          aria-label="maximum height"
          placeholder="Write your post here"
          ref={postRef}
          style={{
            width: "100%",
            fontSize: "0.875rem",
            fontWeight: "400",
            lineHeight: "1.5",
            padding: "8px 12px",
            borderRadius: "8px",
            color: "#1C2025",
            background: "#fff",
            border: "1px solid #DAE2ED",
            boxShadow: "0px 2px 2px #F3F6F9",
          }}
        />
        <Button
          onClick={postSubmitHandler}
          sx={{
            color: "#fff",
            backgroundColor: "#ef4c4a",
            textTransform: "capitalize",
            display: "block",
          }}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default AddPost;
