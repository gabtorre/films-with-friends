import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Avatar from "react-avatar";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import {
    EditProfileContainer,
    FormWrap,
    FormContent,
    EditProfileForm,
    InlineDiv,
    InlineDivRight
  } from "../../StyledComponents";
  import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FriendList(props) {
    const firestore = firebase.firestore();

    const [userdata, loading, error] = useDocumentData(
        firestore.doc('users/' + props.uid)
    );

    return (
        <EditProfileContainer>
<ToastContainer />
      <FormWrap >
        <FormContent >
        <InlineDiv>
            {userdata && <Avatar src={userdata.photoURL} size="50" round={true} style={{marginRight: "5%"}}/>}
            <InlineDivRight>{userdata && <h3>{userdata.displayName}'s Profile</h3>}</InlineDivRight>
        </InlineDiv>
          <EditProfileForm>
              <h5>Friend list</h5>
          {userdata && userdata.friendlist.map(friend =>
            <FriendCard findProfile={props.findProfile} uid={friend}/>
            )}
          </EditProfileForm>
          </FormContent>
          </FormWrap>
        </EditProfileContainer>
    );

    function FriendCard(props){
        const [userdata, loading, error] = useDocumentData(
            firestore.doc('users/' + props.uid)
        );


        return (
            <>
            {userdata && (
                <InlineDiv>
                <Avatar src={userdata.photoURL} size="50" round={true} style={{marginRight: "5%", cursor: "pointer"}} onClick={() => props.findProfile(props.uid)}/>
                <InlineDivRight onClick={() => props.findProfile(props.uid)}><p>{userdata.displayName}</p></InlineDivRight>
                </InlineDiv>
            )}
            </>
        )
    }
}
