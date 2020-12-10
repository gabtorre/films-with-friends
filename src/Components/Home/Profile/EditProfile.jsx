import React, { useState } from "react";
import {
  EditProfileContainer,
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormButton,
  TitleWrapper,
} from "../../StyledComponents";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Avatar from "react-avatar";

const EditProfile = () => {
  const auth = firebase.auth();
  const storage = firebase.storage();
  const firestore = firebase.firestore();
  let user = auth.currentUser;

  const [formData, setFormData] = useState({
    displayName: auth.currentUser.displayName,
    email: auth.currentUser.email,
    photoURL: auth.currentUser.photoURL,
    submitted: false,
    photoUpdated: false,
  });

  const { email, displayName, photoURL, submitted, photoUpdated } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const [imageAsFile, setImageAsFile] = useState("");

  const handleImageAsFile = async (e) => {
    const image = e.target.files[0];
    const uid = auth.currentUser.uid;
    setImageAsFile((imageFile) => image);
    await firebase
      .storage()
      .ref(`/users/${uid}/${imageAsFile.name}`)
      .put(imageAsFile)
      .on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (err) => {
          toast.error(err);
        },
        async () => {
          await storage
            .ref(`/users/${uid}/`)
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              console.log(fireBaseUrl);
              setFormData((prevObject) => ({
                ...prevObject,
                photoURL: fireBaseUrl,
                photoUpdated: true,
              }));
              user.updateProfile({
                photoURL: fireBaseUrl,
              });
            });
        }
      );
  };

  const handleSubmit = async (e) => {
    let uid = auth.currentUser.uid;
    await auth.currentUser
      .updateProfile({
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      })
      .then(async (user) => {
        const usersRef = await firestore.collection("users").doc(uid);
        await usersRef.update({
          photoURL: auth.currentUser.photoURL,
          email: auth.currentUser.email,
          displayName: auth.currentUser.displayName,
        });
        toast.success(`Updated Successfully!`);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        toast.error(errorCode + errorMessage);
      });
  };

  return (
    <EditProfileContainer>
      <ToastContainer />
      <FormWrap>
        <FormContent>
          <Form onSubmit={handleSubmit} id="editprofile">
            <div style={{ textAlign: "center", marginBottom: "5%" }}>
              <Avatar src={photoURL} size="100" round={true} />
            </div>
            <FormInput
              type="file"
              placeholder="Profile Picture"
              onChange={handleImageAsFile}
            />
            <TitleWrapper>Edit Profile</TitleWrapper>
            <FormInput
              type="text"
              name="displayName"
              placeholder={displayName}
              onChange={handleChange("displayName")}
              required
            />
            <FormInput
              type="email"
              name="email"
              placeholder={email}
              onChange={handleChange("email")}
              required
            />
            <FormButton
              type="submit"
              style={{ backgroundColor: "#E50914" }}
              form="editprofile"
            >
              Submit Changes
            </FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </EditProfileContainer>
  );
};

export default EditProfile;
