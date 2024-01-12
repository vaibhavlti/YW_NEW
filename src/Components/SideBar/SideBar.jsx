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

//import icons from react icons
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiUsers,
} from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";
import logo from "../../images/logo.png";

const SideBar = () => {
  const navigate = useNavigate();

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [active, setActive] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handleLogout = (e) => {
    // localStorage.removeItem('username');
    // localStorage.removeItem('token');
    // localStorage.removeItem('role');
    // localStorage.removeItem('mobileNumber');
    // setIsLoggedin(false);
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <img src={logo} className="img-home" alt={"logo"} />

              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? (
                  <FiArrowRightCircle
                    style={{ marginTop: "45px" }}
                    color="black"
                  />
                ) : (
                  <FiArrowLeftCircle
                    style={{ marginTop: "45px" }}
                    color="black"
                  />
                )}
              </div>
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
              <MenuItem icon={<FiLogOut />} onClick={(e) => handleLogout(e)}>
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
