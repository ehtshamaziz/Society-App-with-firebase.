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
import CustomButton from "../../components/button";
import HeadingView from "../../components/headingView";
import FloatingButton from "../../components/floatingButton";
import { useTheme } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState, useEffect } from "react";

function ViewBox(props) {
  const { colors } = useTheme();
  return (
    <View style={[styles.viewbox, { backgroundColor: colors.card }]}>
      <View style={styles.viewboxContent} >
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 14, color: colors.text }]}>
          {props.title}
        </Text>
        <Text style={[styles.text, { color: "#a6a6a6" }]}>{props.text}</Text>
      </View>
      <Pressable onPress={props.func} style={{ flex: 1, alignItems: 'flex-end' }}>
        <Icon name="trash-alt" size={34} solid color="red" />
      </Pressable>
    </View>
  );
}

export default function M_Notices_General({ navigation }) {
  const [ti, setTi] = useState([]);
  const [desc, setDesc] = useState([]);
  const [data, setData] = useState([]);

  console.log("Notices General Enter");
  const firestore = firebase.firestore();
  useEffect(async () => {
    firestore
      .collection("notices")
      .where("category", "==", "general")
      .get()
      .then((snapshot) => {
        const dataas = []
        snapshot.forEach((doc) => {
          dataas.push({
            title: doc.data().title,
            description: doc.data().description,
            category: doc.data().category
          })
          console.log(doc.id, "=>", doc.data().title);
        }
        );
        setData(dataas)
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  }, [])

  return (
    <View style={styles.mainContainer}>
      <HeadingView text="General Notices" icon="users" />

      <ScrollView
        style={styles.viewboxContainer}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <ViewBox
            plot={item.title}
            title={item.category}
            text={item.description}
          />
        ))}

      </ScrollView>
      <FloatingButton
        icon="plus"
        func={() => navigation.navigate("M_Notices_General_New")}
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
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 14,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowRadius: 4.65,
    elevation: 4,
    marginHorizontal: 6,
  },
  viewboxContent: {
    marginLeft: 5,
    flex: 5,
  },
  text: {
    margin: 4,
    fontSize: 13,
  },
});
