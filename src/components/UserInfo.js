import { Container, styled } from "@mui/material";
import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PostsList from "./PostsList";
import FollowerList from "./FollowerList";
import FollowingList from "./FollowingList";

const CustomTabs = styled(Tabs)`
  & .css-1aquho2-MuiTabs-indicator {
    top: 0;
  }

  & .MuiTab-textColorPrimary {
    color: #bcb4b4;
  }

  & .css-1aquho2-MuiTabs-indicator {
    background-color: #000;
  }

  & .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #000;
  }
`;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const UserInfo = ({ userDtlMenu }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container component="section" maxWidth="sm">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderTop: 1, borderColor: "divider" }}>
            <CustomTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered>
              {userDtlMenu.map((item, index) => (
                <Tab key={item} label={item} {...a11yProps(index)} />
              ))}
            </CustomTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <PostsList></PostsList>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <FollowerList></FollowerList>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <FollowingList></FollowingList>
          </CustomTabPanel>
        </Box>
      </Container>
    </>
  );
};

export default UserInfo;
