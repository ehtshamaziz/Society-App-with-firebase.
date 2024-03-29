// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/button";
import HeadingView from "../../components/headingView";
import SvgImage from "../../assets/Add.svg";
import InputContainer from "../../components/inputContainer";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function M_Notices_General_New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function AddGeneralNotice() {
    console.log("Notices Enter");
    const firestore = firebase.firestore();

    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("notices")
      .add({
        title: title,
        description: description,
        category: "general",

      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    firestore
      .collection("notices")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data().title);
        });
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  }
  return (
    <View style={styles.mainContainer}>
      <HeadingView
        text="Send General Notice"
        icon="users"
        viewStyle={{ marginBottom: 30 }}
      />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      <View style={styles.midContainer}>
        <InputContainer text="Title" value={title} setValue={setTitle} />
        <InputContainer
          text="Description"
          multiline={true}
          inputStyle={{ height: 100 }}
          value={description} setValue={setDescription}
        />
        <CustomButton
          text="Send General Notice"
          icon="paper-plane"
          style={{
            marginTop: 0,
            marginHorizontal: 20,
          }}
          func={AddGeneralNotice}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topContainer: {
    alignItems: "center",
  },
  midContainer: {
    paddingTop: 15,
    paddingHorizontal: 6,
  },
});
