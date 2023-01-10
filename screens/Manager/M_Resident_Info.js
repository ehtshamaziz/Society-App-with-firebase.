import { Text, View, Image, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/button";
import InputContainer from "../../components/inputContainer2";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function M_Resident_Info({ navigation, route }) {
  const [cnic, setCnic] = useState(route.params.cnic);
  const [name, setName] = useState(route.params.name);
  const [password, setPassword] = useState(route.params.password);
  const [plotNumber, setPlotNumber] = useState(route.params.plotNumber);
  const [plotSize, setPlotSize] = useState(route.params.plotSize);
  const [number, setNumber] = useState(route.params.number);

  const firestore = firebase.firestore();

  async function remove() {
    firestore.collection("users").doc(route.params.id).delete()
      .then(() => { console.log("Deleted") })
      .then(() => navigation.navigate('M_Residents'))
      .catch((error) => console.log(error));
  }

  async function update() {
    firestore.collection("users").doc(route.params.id)
      .set({
        cnic: cnic,
        name: name,
        password: password,
        plotNumber: plotNumber,
        plotSize: plotSize,
        number: number
      })
      .then(() => navigation.navigate('M_Residents'))
      .catch((error) => console.log(error));
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/avatar1.png")}
        />
      </View>
      <View style={styles.inputContainer}>
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

        <View style={{ flexDirection: "row" }}>
          <CustomButton
            text="UPDATE"
            style={styles.customButton}
            icon="upload"
            func={update}
          />
          <CustomButton
            text="DELETE"
            style={[
              styles.customButton,
              { backgroundColor: "red", marginLeft: 15 },
            ]}
            icon="trash"
            func={remove}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  imgContainer: {
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 70,
    overflow: "hidden",
    padding: 20,
    marginVertical: 30,
  },
  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  inputText: {
    fontSize: 16,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 4,
    marginBottom: 10,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: "#eaeaea",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 1,
  },
  inputHorizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  customButton: {
    marginTop: 18,
    flex: 1,
    borderRadius: 8,
  },
});
