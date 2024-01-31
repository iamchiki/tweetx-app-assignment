import { Box, Button, Toolbar } from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import TweetxContext from "../store/context";

const Footer = () => {
  const ctx = useContext(TweetxContext);
  const navigate = useNavigate();
  const signOutHandler = async () => {
    try {
      const userCredential = await signOut(auth);

      // ctx.userProfile = {
      //   id: "",
      //   name: "",
      //   email: "",
      //   posts: [],
      //   followers: [],
      //   following: [],
      // };
      // console.log(ctx);

      navigate("/login");
    } catch (error) {}
  };
  return (
    <Box
      component="div"
      sx={{
        minHeight: "4rem",
        width: "100%",
        boxShadow: "0px -1px 10px 0px rgba(0,0,0,0.35)",
        position: "fixed",
        bottom: "0",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "#ef4c4a",
          textTransform: "capitalize",
        }}
        variant="contained"
        onClick={signOutHandler}>
        Log out
      </Button>
    </Box>
  );
};

export default Footer;
