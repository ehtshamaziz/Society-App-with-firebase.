// import { StatusBar } from "expo-status-bar";
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
import FloatingButton from "../../components/floatingButton";
import ViewBox from "../../components/viewBox";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState, useEffect } from "react";

export default function R_Maintain_Requests({ navigation }) {
  const [data, setData] = useState([]);
  const firestore = firebase.firestore();
  useEffect(() => {
    console.log("Maintencance Enter");
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("maintenance")
      .get()
      .then((snapshot) => {
        const dataas = []
        snapshot.forEach((doc) => {
          dataas.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            cnic: doc.data().cnic,
          })
        });
        setData(dataas);
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  })
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Maintenance Requests" icon="tools" />

      <ScrollView style={styles.viewboxContainer}>
        {data.map((item, index) => (
          <ViewBox
            key={index}
            title={item.title}
            text={item.description}
            func={() => navigation.navigate("R_Maintain_Info", { id: item.id, title: item.title, description: item.description })}
            icon="hammer"
          />))}
      </ScrollView>
      <FloatingButton
        icon="plus"
        func={() => navigation.navigate("R_Maintain_New")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  viewboxContainer: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },
});
