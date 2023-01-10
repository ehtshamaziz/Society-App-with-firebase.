// import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import HeadingView from "../../components/headingView";
import ViewBox from "../../components/viewBox";
import { useEffect, useState, } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function M_Maintain_Request({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Maintencance Enter");
    const firestore = firebase.firestore();
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
          })
        });
        setData(dataas);
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  }, [])
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Maintenance Requests" icon="tools" />
      <ScrollView style={styles.viewboxContainer}>
        {data.map((item, index) => (<ViewBox
          title={item.title}
          text={item.description}
          func={() => navigation.navigate("M_Maintain_Info", { id: item.id, title: item.title, description: item.description })}
          icon="hammer"
        />))
        }
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
