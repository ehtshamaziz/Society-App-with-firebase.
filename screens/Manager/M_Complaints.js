// import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import FloatingButton from "../../components/floatingButton";
import HeadingView from "../../components/headingView";
import ViewBox from "../../components/viewBox";
import { useEffect, useState, } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function M_Complaints({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Complaints Enter");
    const firestore = firebase.firestore();
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("complaints")
      .get()
      .then((snapshot) => {
        const dataas = []
        snapshot.forEach((doc) => {
          dataas.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
          })
        });
        console.log(dataas);
        setData(dataas);
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  }, [])
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Complaints" icon="envelope-open-text" />
      <ScrollView style={styles.viewboxContainer}>
        {data.map((item) =>
          <ViewBox
            title={item.title}
            text={item.description}
            func={() => navigation.navigate("M_Complaints_Info", { id: item.id })}
            icon="fist-raised"
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  viewboxContainer: {
    paddingHorizontal: 4,
  },
});
