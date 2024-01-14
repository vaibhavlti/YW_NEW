import { Link } from "react-router-dom";

//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Typography } from "@mui/material";

import { FiHome, FiUsers } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";

import Header from "../Header/Header";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";
import logo from "../../images/logo.png";

const SideBar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse] = useState(false);

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <img src={logo} className="img-home" alt={"logo"} />
              <Header />
            </div>
          </SidebarHeader>
          <SidebarContent className="sideBarColor">
            <Menu
              iconShape="square"
              renderMenuItemStyles={() => ({
                ".menu-anchor": {
                  backgroundColor: "red",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                },
              })}
            >
              <MenuItem icon={<FiHome />}>
                <Link to="/Home">Home</Link>
              </MenuItem>
              <MenuItem icon={<HiPencilAlt />}>
                <Link to="/certificates"> Certificate</Link>
              </MenuItem>
              <MenuItem icon={<FiUsers />}>
                <Link to="/profile">Account</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu
              iconShape="square"
              style={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <Typography variant="body2" color="white" align="center">
                {"Copyright © "}
                Yorkshire Water {new Date().getFullYear()}
                {"."}
              </Typography>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
