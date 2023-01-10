// import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import HeadingView from "../../components/headingView";
import { useTheme } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function ViewBox(props) {
  const { colors } = useTheme();
  return (
    <View style={styles.viewbox}>
      <View style={styles.viewboxContent}>
        <Text style={[styles.text, { fontSize: 16, color: '#000' }]}>
          Manager: {props.name}
        </Text>
        <Text
          style={[
            styles.text,
            { fontWeight: "bold", fontSize: 14, color: "#00ADB5" },
          ]}
        >
          {props.title}
        </Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
}

export default function R_Notices() {
  const [data, setData] = useState([]);
  async function callFunction() {
    const value = JSON.parse(await AsyncStorage.getItem('user'));
    const cnic = value.cnic;
    const firestore = firebase.firestore();
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("notices")
      .where("category", "==", "general")
      .get()
      .then((snapshot) => {
        console.log(cnic);
        const ab = [];
        snapshot.forEach((doc) => {
          ab.push(doc.data());
        });
        setData(ab);

        // firestore
        //   .collection("notices")
        //   .where("cnic", "==", cnic)
        //   .get()
        //   .then((snapshot) => {
        //     const datas = []
        //     snapshot.forEach((doc) => {
        //       datas.push(doc.data());
        //     });
        //     setData((oldArr) => setData(...oldArr, ...datas));
        //   })
        //   .catch((error) => {
        //     console.log("Error getting documents:", error);
        //   });
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
    console.log(data)
  }
  useEffect(() => {
    callFunction();
    console.log("Notices Enter");
  }, [])


  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Notices" icon="sticky-note" />

      <ScrollView style={styles.viewboxContainer}>

        {data.map((item, index) =>
        (
          <ViewBox
            key={index}
            name={item.name}
            plot={item.plotNumber}
            title={item.title}
            text={item.description}
          />
        )
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topContainer: {
    backgroundColor: "#00ADB5",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    color: "#eeeeee",
    marginLeft: 10,
  },

  viewboxContainer: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    elevation: 4,
  },
  viewboxContent: {
    marginLeft: 10,
  },
  text: {
    marginVertical: 4,
    fontSize: 12,
    color: "#a6a6a6",
  },
});
