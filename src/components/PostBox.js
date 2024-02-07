import { Box, Button, TextareaAutosize } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import TweetxContext from "../store/context";
import { db } from "../firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import CustomBtnComponent from "./UI/CustomBtnComponent";

const PostBox = ({ displayBox }) => {
  const ctx = useContext(TweetxContext);

  const postRef = useRef("");

  console.log(postRef);

  useEffect(() => {
    postRef.current.maxLength = 100;
  }, []);
  const postSubmitHandler = async (e) => {
    try {
      if (postRef.current.value === "") {
        throw new Error("Please Write post");
      }
      // update userprofile state
      ctx.userProfile = {
        ...ctx.userProfile,
        posts: [
          ...ctx.userProfile.posts,
          { post: postRef.current.value, postTimestamp: Date.now() },
        ],
      };
      const userPostRef = doc(db, "users", ctx.currentUser.uid);

      // update firebase db wiht updated state
      await updateDoc(userPostRef, {
        posts: [...ctx.userProfile.posts],
      });
      displayBox(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box component="div" sx={{}}>
      <TextareaAutosize
        minRows={3}
        maxRows={3}
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
          marginBottom: "1rem",
        }}
      />
      <CustomBtnComponent onClick={postSubmitHandler} variant="contained">
        Post
      </CustomBtnComponent>
    </Box>
  );
};

export default PostBox;
