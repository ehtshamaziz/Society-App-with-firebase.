// import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, TextInput } from "react-native";
import HeadingView from "../../components/headingView";
import SvgImage from "../../assets/Maintenance.svg";
import InputContainer from "../../components/inputContainer2";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState, useEffect } from "react";

export default function R_Maintain_Info({ navigation, route }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Maintencance Enter");
    const firestore = firebase.firestore();
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("maintenance")
      .doc(route.params.id)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const datas = doc.data();
        });
        setData(datas);
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  }, [])
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Maintenance Request Info" icon="tools" />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      {data &&
        <View style={styles.midContainer}>
          <InputContainer text="Title" value={route.params.title} />
          <InputContainer
            text="Description"
            multiline={true}
            inputStyle={{ height: 100 }}
            value={route.params.description}
          />
          <InputContainer
            text="Response"
            multiline={true}
            inputStyle={{ height: 100 }}
            value={data.response}
          />
        </View>
      }
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
