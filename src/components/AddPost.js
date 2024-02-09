import { Alert, Collapse, Container, Snackbar } from "@mui/material";

import React, { useContext, useState } from "react";
import TweetxContext from "../store/context";
import PostBox from "./PostBox";

import CustomBtnComponent from "./UI/CustomBtnComponent";

const AddPost = () => {
  const ctx = useContext(TweetxContext);

  const [display, setdisplay] = useState(false);

  const [open, setOpen] = useState(false);
  const [message, setMesssage] = useState("");
  const [severity, setSeverity] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const displayPostBox = () => {
    setdisplay(true);
  };

  const successHandler = () => {
    setOpen(true);
    setMesssage("Your Post Submitted Succesfull!");
    setSeverity("success");
  };

  const errorHandler = (error) => {
    setOpen(true);
    setMesssage(error.message);
    console.log(error);
    setSeverity("error");
  };

  return (
    <Container
      component="section"
      maxWidth="sm"
      sx={{
        marginBottom: "2rem",
      }}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ top: "16px" }}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <CustomBtnComponent
        sx={{
          marginBottom: "1rem",
        }}
        onClick={displayPostBox}
        variant="contained">
        Write
      </CustomBtnComponent>

      <Collapse in={display}>
        <PostBox
          displayBox={setdisplay}
          successNotification={successHandler}
          errorNotification={errorHandler}></PostBox>
      </Collapse>
    </Container>
  );
};

export default AddPost;
