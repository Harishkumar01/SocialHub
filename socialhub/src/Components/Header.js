import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  return (
    <>
      <div id="header">
        <ProSidebar>
          <SidebarHeader>
          <div className="logotext">
              <p>Social Platforms</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />} onClick={event =>  window.location.href='/github'}>
                  Github
              </MenuItem>
              <MenuItem icon={<FiHome />} onClick={event =>  window.location.href='/linkedin'}>
                  LinkedIn
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem>@Socialhub</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;