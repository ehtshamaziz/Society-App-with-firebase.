// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
// import Constants from "expo-constants";
import HeadingView from "../../components/headingView";
import FloatingButton from "../../components/floatingButton";
import { useTheme } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function ViewBox(props) {
  const { colors } = useTheme();
  return (
    <Pressable onPress={props.func}>
      <View style={[styles.viewbox, { backgroundColor: colors.card }]}>
        <Image style={styles.img} source={props.img} />
        <View style={styles.viewboxContent}>
          <Text style={[styles.text, { color: colors.text, fontSize: 15, fontWeight: 'bold' }]}>
            {props.name}
          </Text>
          <Text style={[styles.text, { color: colors.primary }]}>
            {props.cnic}
          </Text>
          <Text style={[styles.text, { color: colors.text }]}>
            {" "}
            Plot#{props.plot}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function M_Resident({ navigation }) {
  const [data, setData] = useState([]);

  const { colors } = useTheme();

  useEffect(() => {
    const firestore = firebase.firestore();
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("users")
      .get()
      .then((snapshot) => {
        const dataas = [];
        snapshot.forEach((doc) => {
          const user = doc.data();
          user.id = doc.id;
          dataas.push(user);
        });
        setData(dataas);
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  });


  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Manage Residents" icon="users" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewboxContainer}>
          {data.map((user, index) => (
            <ViewBox
              key={index}
              name={user.name}
              cnic={user.cnic}
              plot={user.plotNumber}
              img={require("../../assets/avatar2.png")}
              func={() => {
                navigation.navigate("M_Resident_Info", {
                  name: user.name,
                  number: user.number,
                  plotNumber: user.plotNumber,
                  plotSize: user.plotSize,
                  password: user.password,
                  cnic: user.cnic,
                  id: user.id
                });
              }}
            />
          ))}
        </View>
      </ScrollView>
      <FloatingButton
        icon="plus"
        func={() => navigation.navigate("M_Resident_New")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingTop: Constants.statusBarHeight,
  },
  searchContainer: {
    flexDirection: "row",
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    flex: 4,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  search_input: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: "#808080",
    flex: 1,
  },
  filter_button: {
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginBottom: 7,
    shadowColor: "#000",
    elevation: 4,
  },
  viewboxContent: {
    marginLeft: 20,
  },
  text: {
    margin: 4,
    fontSize: 13,
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
});
