import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
// import Constants from "expo-constants";
import CustomButton from "../../components/button";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function R_Login({ navigation }) {
  const [cnic, setCnic] = useState("");
  const [password, setIsPassword] = useState("");


  function Login() {
    async function storing(user) {
      try {
        await AsyncStorage.setItem(
          'user',
          JSON.stringify(user)
        );
        console.log(user);

      } catch (error) {
        // Error saving data
      }
    }
    console.log("Login Enter");
    const firestore = firebase.firestore();

    // STORE USER DATA INTO CLOUD FIRESTORE

    // GET ALL DOCUMENTS FROM CLOUD FIRESTORE

    firestore
      .collection("users")
      .where('cnic', '==', cnic).where('password', '==', password).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const user = doc.data();
          console.log(user);
          storing(user);
          navigation.navigate('Resident');
        });
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#00ADB5" barStyle="default" />
      <View style={styles.topContainer}>
        <Image
          style={{ width: 115, height: 115 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1001/1001209.png",
          }}
        />
        <Text style={styles.heading}>Society Management System</Text>
        <Text style={[styles.heading, { fontSize: 20, color: "#27496D" }]}>
          Resident Login
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <TextInput
          placeholder="Id"
          style={styles.inputs}
          value={cnic}
          onChangeText={setCnic}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputs}
          value={password}
          onChangeText={setIsPassword}
        />
        <CustomButton
          text="Login"
          func={Login}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
  },

  topContainer: {
    flex: 1.5,
    justifyContent: "center",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: "#00ADB5",
    padding: 25,
    alignItems: "center",
  },

  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 45,
  },
  heading: {
    margin: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#eeeeee",
  },
  inputs: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    backgroundColor: "#F1F1F1",
    margin: 5,
    color: "#808080",
  },
  button: {
    backgroundColor: "#00ADB5",

    paddingVertical: 12,
    paddingHorizontal: 24,
    marginHorizontal: 5,
    marginTop: 15,
    borderRadius: 30,
  },
});
