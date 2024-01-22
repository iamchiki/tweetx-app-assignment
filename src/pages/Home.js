import React from "react";

import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Home;
