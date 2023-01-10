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
import SvgImage from "../../assets/Notice.svg";
import { useTheme } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function M_Notices({ navigation }) {

  const [specific, setSpecific] = useState("");
  const [general, setGeneral] = useState("");
  useEffect(() => {
    console.log("Complaints Enter");
    const firestore = firebase.firestore();
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("notices")
      .where("category", "==", "general")
      .get()
      .then((doc) => {
        setGeneral(doc.size)
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });

    firestore
      .collection("notices")
      .where("category", "==", "specific")
      .get()
      .then((doc) => {
        setSpecific(doc.size)
      })
      .catch((error) => {
        console.log("Error getting documents:", error);
      });
  })


  const { colors } = useTheme();
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Notices" icon="envelope-open-text" />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      <View style={styles.viewboxContainer}>
        <Pressable
          style={[styles.viewbox, { backgroundColor: colors.card }]}
          onPress={() => navigation.navigate("M_Notices_Specific")}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="exclamation-triangle"
              size={26}
              solid
              color={colors.primary}
            />
            <View style={styles.viewboxContent}>
              <Text style={[styles.contentText, { color: colors.text }]}>Specific</Text>
            </View>
          </View>
          <Icon name="arrow-right" size={20} solid color="#a6a6a6" />
        </Pressable>

        <Pressable
          style={[styles.viewbox, { backgroundColor: colors.card }]}
          onPress={() => navigation.navigate("M_Notices_General")}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="users" size={26} solid color={colors.primary} />
            <View style={styles.viewboxContent}>
              <Text style={[styles.contentText, { color: colors.text }]}>General</Text>
            </View>
          </View>
          <Icon name="arrow-right" size={20} solid color="#a6a6a6" />
        </Pressable>

        <Text style={[styles.smallheading, { color: colors.text, borderBottomColor: colors.border }]}>Notices Summary</Text>
        <View style={styles.bigview}>
          <View style={[styles.viewbox2, { backgroundColor: colors.card }]}>
            <Icon
              name="exclamation-triangle"
              size={32}
              solid
              color={colors.primary}
              style={{ marginHorizontal: 2 }}
            />

            <View style={styles.viewbox2Content}>
              <Text style={[styles.contentText, { color: colors.text }]}>Specific</Text>
              <Text style={{ fontSize: 16, marginTop: 6, color: "#a6a6a6" }}>
                {specific}
              </Text>
            </View>
          </View>
          <View style={[styles.viewbox2, { backgroundColor: colors.card }]}>
            <Icon name="users" size={32} solid color={colors.primary} />
            <View style={styles.viewbox2Content}>
              <Text style={[styles.contentText, { color: colors.text }]}>General</Text>
              <Text style={{ fontSize: 16, marginTop: 6, color: "#a6a6a6" }}>
                {general}
              </Text>
            </View>
          </View>
        </View>
      </View>
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
  viewboxContainer: {
    padding: 10,
  },
  smallheading: {
    fontSize: 22,
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowRadius: 4.65,
    elevation: 6,
  },
  contentText: {
    justifyContent: "center",
    fontSize: 18,
    color: "#404040",
  },
  bigview: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  viewboxContent: {
    marginLeft: 15,
  },

  viewbox2: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 30,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowRadius: 4.65,
    elevation: 6,
  },
  viewbox2Content: {
    marginLeft: 8,
    alignItems: "center",
  },
});
