import React, { useState } from "react";
import { CardWrapper } from "../StyledComponents";
import Avatar from "react-avatar";
import firebase from "firebase/app";
import "../Components.css";
import Button from "react-bootstrap/Button";
import {
  ProSidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart, FaUserCircle, FaBars, FaHome } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

const auth = firebase.auth();

function ProfileBar() {
  const [sideBarClosed, setsideBarClosed] = React.useState(true);

  return (
    <ProSidebar toggled="true" onToggle="false" collapsed={sideBarClosed}>
      <Menu >
        { sideBarClosed ? <MenuItem icon={<FaBars onClick={() => setsideBarClosed(false)} />}>Movie.</MenuItem> : <MenuItem icon={<FaBars onClick={() => setsideBarClosed(true)} />}>Movie.</MenuItem> }
        <MenuItem icon={<FaHome />}>Home</MenuItem>
        <MenuItem icon={<FaHeart />}>Watch List</MenuItem>
        <MenuItem icon={<VscLibrary />}>Library</MenuItem>
        <MenuItem>
          {auth.currentUser && !sideBarClosed ? (
            <div className="inBlock">
              <Avatar
                src={
                  auth.currentUser.photoURL ||
                  "https://i.ibb.co/cJ6G9Vc/image.png"
                }
                size="30"
                round={true}
              />{" "}
              <span>{auth.currentUser.displayName}</span>
              <MenuItem><Button style={{padding: "5%"}} className="signoutbtn" onClick={() => auth.signOut()}>Sign Out</Button></MenuItem>
            </div>
          ) : null}
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default ProfileBar;
