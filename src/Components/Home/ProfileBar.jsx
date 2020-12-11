import React, { useState } from "react";
import { LogOutBtn } from "../StyledComponents";
import Avatar from "react-avatar";
import firebase from "firebase/app";
import "../Components.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaUserCircle, FaBars, FaHome } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";

const auth = firebase.auth();

function ProfileBar(props) {
  const [sideBarClosed, setsideBarClosed] = useState(true);
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
            <MenuItem icon={<FaHome />} onClick={() => props.pageSwitcher("home")}>Home</MenuItem>
            <MenuItem icon={<VscLibrary />} onClick={() => props.pageSwitcher("profile", props.uid)}>Library</MenuItem>
            <MenuItem icon={<FaUserCircle />} onClick={() => props.pageSwitcher("edit")}>Profile</MenuItem>
          </Menu>
          {auth.currentUser && !sideBarClosed ? (
            <SidebarFooter style={{ textAlign: "center", marginTop: "80%"}}>
              <div
                className="sidebar-btn-wrapper"
                style={{
                  padding: "20px 24px",
                }}
              >
                <div className="inBlock" >
                  <Avatar
                    src={
                      auth.currentUser.photoURL ||
                      "https://i.ibb.co/cJ6G9Vc/image.png"
                    }
                    size="30"
                    round={true}
                    onClick={() => props.pageSwitcher("edit")}
                  />{" "}
                  <b onClick={() => props.pageSwitcher("edit")}>{auth.currentUser.displayName}</b>
                  <LogOutBtn
                    style={{ padding: "5%" }}
                    className="signoutbtn"
                    onClick={() => auth.signOut()}
                  >
                    Sign Out
                  </LogOutBtn>
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
