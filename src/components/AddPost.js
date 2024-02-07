import { Button, Collapse, Container } from "@mui/material";
import React, { useContext, useState } from "react";
import TweetxContext from "../store/context";
import PostBox from "./PostBox";
import { TransitionGroup } from "react-transition-group";

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
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "#ef4c4a",
          textTransform: "capitalize",
          display: "block",
          marginBottom: "1rem",
        }}
        onClick={displayPostBox}>
        Write
      </Button>
      {/* {display && <PostBox display={setdisplay}></PostBox>} */}

      <Collapse in={display}>
        <PostBox displayBox={setdisplay}></PostBox>
      </Collapse>
    </Container>
  );
};

export default AddPost;
