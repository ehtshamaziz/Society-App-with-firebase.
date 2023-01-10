// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/button";
import HeadingView from "../../components/headingView";
import SvgImage from "../../assets/Add.svg";
import InputContainer from "../../components/inputContainer";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function M_Resident_New() {
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [plotNumber, setPlotNumber] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [number, setNumber] = useState("");

  function CreateResident() {
    console.log("Signup Enter");
    const firestore = firebase.firestore();

    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("users")
      .add({
        name: name,
        number: number,
        plotNumber: plotNumber,
        plotSize: plotSize,
        cnic: cnic,
        password: password,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <View style={styles.mainContainer}>
      <HeadingView
        text="Add Resident"
        icon="users"
        viewStyle={{ marginBottom: 30 }}
      />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      <View style={styles.midContainer}>
        <InputContainer text="Name" value={name} setValue={setName} />

        <View style={{ flexDirection: "row" }}>
          <InputContainer
            text="Password"
            style={{ flex: 1, marginRight: 15 }}
            value={password}
            setValue={setPassword}
          />
          <InputContainer
            text="Phone No"
            style={{ flex: 1 }}
            value={number}
            setValue={setNumber}
          />
        </View>
        <InputContainer text="CNIC" value={cnic} setValue={setCnic} />

        <View style={{ flexDirection: "row" }}>
          <InputContainer
            text="Plot #"
            style={{ flex: 1, marginRight: 15 }}
            value={plotNumber}
            setValue={setPlotNumber}
          />
          <InputContainer
            text="Plot Size"
            style={{ flex: 1 }}
            value={plotSize}
            setValue={setPlotSize}
          />
        </View>

        <CustomButton
          text="Add Complaint"
          icon="plus"
          style={{
            marginTop: 0,
            marginHorizontal: 20,
          }}
          func={CreateResident}
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
