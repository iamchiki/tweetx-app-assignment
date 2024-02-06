import React from "react";

import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet></Outlet>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Home;
