// import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
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
import { useTheme } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function ViewBox(props) {
  const { colors } = useTheme();
  return (
    <View style={[styles.viewbox, { backgroundColor: colors.card }]}>
      <View style={styles.viewboxContent}>
        <Text style={[styles.text, { fontSize: 16, color: colors.text }]}>
          {props.name}
        </Text>
        <Text style={[styles.text, { color: colors.primary }]}>
          Plot #{props.plot}
        </Text>
        <Text style={[styles.text, { color: "#a6a6a6" }]}>{props.title}</Text>
      </View>
      <Pressable onPress={props.func}>
        <Icon name="trash-alt" size={32} solid color="red" />
      </Pressable>
    </View>
  );
}

export default function M_Notices_Specific({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Complaints Enter");
    const firestore = firebase.firestore();
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("notices")
      .where("category", "==", "specific")
      .get()
      .then((snapshot) => {
        const dataas = []
        snapshot.forEach((doc) => {
          console.log(doc.data());
          dataas.push({
            title: doc.data().title,
            description: doc.data().description,
            cnic: doc.data().cnic
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
      <HeadingView text="Specific Notices" icon="exclamation-triangle" />

      <ScrollView
        style={styles.viewboxContainer}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item) => (
          <ViewBox
            name={item.title}
            plot={item.category}
            title={item.description}
          />
        ))}
      </ScrollView>
      <FloatingButton
        icon="plus"
        func={() => navigation.navigate("M_Notices_Specific_New")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
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
    paddingHorizontal: 5,
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginBottom: 6,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowRadius: 4.65,
    elevation: 4,
    marginHorizontal: 6,
  },
  viewboxContent: {
    marginLeft: 5,
  },
  text: {
    margin: 5,
  },
  img: {
    width: 45,
    height: 45,
  },
});
