import { Box, Button, Toolbar } from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import TweetxContext from "../store/context";
import CustomBtnComponent from "./UI/CustomBtnComponent";

const Footer = () => {
  const ctx = useContext(TweetxContext);
  const navigate = useNavigate();
  const signOutHandler = async () => {
    try {
      const userCredential = await signOut(auth);

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
      <CustomBtnComponent onClick={signOutHandler} variant="contained">
        Log out
      </CustomBtnComponent>
    </Box>
  );
};

export default Footer;
