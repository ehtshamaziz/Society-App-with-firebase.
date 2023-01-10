// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "../../components/button";
import HeadingView from "../../components/headingView";
import SvgImage from "../../assets/Add.svg";
import InputContainer from "../../components/inputContainer";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function M_Notices_Specific_New({ navigation }) {
  const [cnic, setCnic] = useState("");
  const [notice, setNotice] = useState("");
  const [title, setTitle] = useState("");

  function Signup() {
    console.log("Signup Enter");
    const firestore = firebase.firestore();

    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("notices")
      .add({
        title: title,
        description: notice,
        category: "specific",
        cnic: cnic,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        navigation.navigate('M_Notices_Specific');
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

  }
  return (
    <View style={styles.mainContainer}>
      <HeadingView
        text="Send Specific Notice"
        icon="exclamation-triangle"
        viewStyle={{ marginBottom: 30 }}
      />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      <View style={styles.midContainer}>
        <InputContainer text="CNIC" value={cnic} setValue={setCnic} />

        <InputContainer text="Title" value={title} setValue={setTitle} />
        <InputContainer
          text="Description"
          multiline={true}
          inputStyle={{ height: 100 }}
          value={notice} setValue={setNotice}
        />
        <CustomButton
          text="Send Notice"
          icon="paper-plane"
          style={{
            marginTop: 0,
            marginHorizontal: 20,
          }}
          func={Signup}
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
