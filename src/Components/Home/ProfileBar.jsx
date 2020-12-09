import React, { useState } from "react";
import { CardWrapper } from "../StyledComponents";
import Avatar from "react-avatar";
import firebase from "firebase/app";
import "../Components.css";
import Button from "react-bootstrap/Button";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart, FaUserCircle, FaBars, FaHome } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

const auth = firebase.auth();

function ProfileBar() {
  const [sideBarClosed, setsideBarClosed] = React.useState(true);
  const viewHeight = window.outerHeight;

  return (
    <div style={{ height: viewHeight, backgroundColor: "#0F121D" }}>
      <ProSidebar toggled="true" onToggle="false" collapsed={sideBarClosed}>
        <div style={{ height: viewHeight, backgroundColor: "#0F121D" }}>
          {sideBarClosed ? (
            <SidebarHeader onClick={() => setsideBarClosed(false)}>
              <div
                style={{
                  padding: "24px",
                  textTransform: "lowercase",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Movies.
              </div>
            </SidebarHeader>
          ) : (
            <SidebarHeader onClick={() => setsideBarClosed(true)}>
              <div
                style={{
                  padding: "24px",
                  textTransform: "lowercase",
                  fontWeight: "bold",
                  fontSize: 20,
                  letterSpacing: "1px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Movies.
              </div>
            </SidebarHeader>
          )}
          <Menu>
            {/* { sideBarClosed ? <MenuItem icon={<FaBars onClick={() => setsideBarClosed(false)} />}>Movie.</MenuItem> : <MenuItem icon={<FaBars onClick={() => setsideBarClosed(true)} />}>Movie.</MenuItem> } */}
            <MenuItem icon={<FaHome />}>Home</MenuItem>
            <MenuItem icon={<FaHeart />}>Watch List</MenuItem>
            <MenuItem icon={<VscLibrary />}>Library</MenuItem>
          </Menu>
          {auth.currentUser && !sideBarClosed ? (
            <SidebarFooter style={{ textAlign: "center", marginTop: "80%"}}>
              <div
                className="sidebar-btn-wrapper"
                style={{
                  padding: "20px 24px",
                }}
              >
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
                  <Button
                    style={{ padding: "5%" }}
                    className="signoutbtn"
                    onClick={() => auth.signOut()}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </SidebarFooter>
          ) : null}
        </div>
      </ProSidebar>
    </div>
  );
}

export default ProfileBar;
