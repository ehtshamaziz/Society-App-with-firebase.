import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/button";

export default function M_Resident_Info({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.img}
        source={require("../../assets/avatar1.png")}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Name:</Text>
        <TextInput style={styles.input} value="Humza Irfan" />
        <Text style={styles.inputText}>CNIC:</Text>
        <View style={styles.inputHorizontalContainer}>
          <TextInput
            maxLength={5}
            style={[styles.input, { marginRight: 8, flex: 4 }]}
            value="37451"
          />
          <TextInput
            maxLength={7}
            style={[styles.input, { marginRight: 8, flex: 7 }]}
            value="1234123"
          />
          <TextInput
            maxLength={1}
            style={[styles.input, { flex: 1 }]}
            value="1"
          />
        </View>

        <View style={styles.inputHorizontalContainer}>
          <View style={{ flex: 4, marginRight: 20 }}>
            <Text style={styles.inputText}>Plot #:</Text>
            <TextInput style={styles.input} value="122" />
          </View>
          <View style={{ flex: 5 }}>
            <Text style={styles.inputText}>Plot Size (Marla):</Text>
            <TextInput style={styles.input} value="10" />
          </View>
        </View>

        <Text style={styles.inputText}>Phone #:</Text>
        <TextInput style={styles.input} value="+923569376202" />

        <View style={{ flexDirection: "row" }}>
          <CustomButton
            text="UPDATE"
            style={styles.customButton}
            icon="upload"
          />
          <CustomButton
            text="DELETE"
            style={[
              styles.customButton,
              { backgroundColor: "red", marginLeft: 15 },
            ]}
            icon="trash"
            func={() => navigation.navigate("M_Residents")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
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
    width: 320,
  },
  inputText: {
    fontSize: 18,
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
    fontSize: 18,
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
