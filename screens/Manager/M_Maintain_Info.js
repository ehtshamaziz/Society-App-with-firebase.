import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import HeadingView from "../../components/headingView";
import SvgImage from "../../assets/Maintenance.svg";
import InputContainer from "../../components/inputContainer2";
import CustomButton from "../../components/button";
import { useEffect, useState, } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function M_Maintain_Info({ route, navigation }) {

  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Maintenance Request Info" icon="tools" />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      <View style={styles.midContainer}>
        <InputContainer text="Title" editable={false} value={route.params.title} />
        <InputContainer
          text="Description"
          multiline={true}
          inputStyle={{ height: 75 }}
          editable={false}
          value={route.params.description}
        />
        <InputContainer
          text="Response"
          multiline={true}
          inputStyle={{ height: 75 }}
        />
      </View>
      <CustomButton
        text="Send Response"
        icon="paper-plane"
        style={{
          marginTop: 0,
          marginHorizontal: 20,
        }}
      />
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
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    fontSize: 13,
    letterSpacing: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
  },

  midContainer: {
    paddingTop: 30,
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
