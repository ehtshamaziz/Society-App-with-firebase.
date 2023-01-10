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

export default function M_Login({ navigation }) {
  const [id, setId] = useState("");
  const [password, setIsPassword] = useState("");

  function Login() {
    if (id == 'admin' && password == 'admin') {
      navigation.navigate('Manager');
    }
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#222831" barStyle="light-content" />
      <View style={styles.topContainer}>
        <Image
          style={{ width: 115, height: 115 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1001/1001209.png",
          }}
        />
        <Text style={styles.heading}>Society Management System</Text>
        <Text style={[styles.heading, { fontSize: 20, color: "#27496D" }]}>
          Manager Login
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <TextInput placeholder="Name" style={styles.inputs}
          value={id} onChangeText={setId} />
        <TextInput placeholder="Password" style={styles.inputs}
          value={password} onChangeText={setIsPassword} />
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
