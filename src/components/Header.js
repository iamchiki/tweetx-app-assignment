import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const navItems = ["Feed", "Users", "Profile"];
const Header = () => {
  return (
    <AppBar component="nav" sx={{ backgroundColor: "#fff", color: "#ef4c4a" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "block" }}>
          TweetX
        </Typography>
        <Box sx={{ display: "block" }}>
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`${item.toLowerCase()}`}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ef4c4a" : "#bcb4b4",
                };
              }}>
              <Button sx={{ color: "inherit", textTransform: "capitalize" }}>
                {item}
              </Button>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
