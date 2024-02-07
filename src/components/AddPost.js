import { Collapse, Container } from "@mui/material";

import React, { useContext, useState } from "react";
import TweetxContext from "../store/context";
import PostBox from "./PostBox";

import CustomBtnComponent from "./UI/CustomBtnComponent";

const AddPost = () => {
  const ctx = useContext(TweetxContext);

  const [display, setdisplay] = useState(false);

  const displayPostBox = () => {
    setdisplay(true);
  };

  return (
    <Container
      component="section"
      maxWidth="sm"
      sx={{
        marginBottom: "2rem",
      }}>
      <CustomBtnComponent
        sx={{
          marginBottom: "1rem",
        }}
        onClick={displayPostBox}
        variant="contained">
        Write
      </CustomBtnComponent>

      <Collapse in={display}>
        <PostBox displayBox={setdisplay}></PostBox>
      </Collapse>
    </Container>
  );
};

export default AddPost;
