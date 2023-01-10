// import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/button";
import HeadingView from "../../components/headingView";
import SvgImage from "../../assets/Add.svg";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function R_Maintain_New() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [cnic, setCnic] = useState("");
  async function AddMaintenance() {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('user'));
      if (value !== null) {
        console.log(value.password);
        setCnic(value.cnic);
      }
    } catch (error) {
      // Error retrieving data
    }
    console.log("Maintenance Enter");
    const firestore = firebase.firestore();
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("maintenance")
      .add({
        title: title,
        description: description,
        category: "general",
        cnic: cnic,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        navigation.navigate("R_Maintain_Requests")
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <View style={styles.mainContainer}>
      <HeadingView
        text="Add Maintenance Request"
        icon="tools"
        viewStyle={{ marginBottom: 30 }}
      />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      <View style={styles.midContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Maintenance Request Title: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Title..."
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Category: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Category..."
            value={category}
            onChangeText={setCategory}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Maintenance Request Description: </Text>
          <TextInput
            multiline={true}
            minHeight={20}
            style={[styles.input, { height: 100 }]}
            placeholder="Enter Description..."
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <CustomButton
          text="Add Maintenance Request"
          icon="plus"
          style={{
            marginTop: 0,
            marginHorizontal: 20,
          }}
          func={AddMaintenance}
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
  input: {
    backgroundColor: "#fff",
    marginTop: 6,
    marginBottom: 4,
    paddingVertical: 8,
    paddingHorizontal: 14,
    fontSize: 13,
    letterSpacing: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
  },

  midContainer: {
    paddingTop: 25,
    paddingHorizontal: 6,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
});
