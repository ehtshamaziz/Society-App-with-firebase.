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

function ViewBox(props) {
  return (
    <View style={styles.viewbox}>
      <View style={styles.viewboxContent}>
        <Text style={[styles.text, { fontSize: 18 }]}>
          Manager: {props.name}
        </Text>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 16 }]}>
          {props.title}
        </Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
}

export default function R_Notices() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icon name="sticky-note" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Notices</Text>
      </View>

      <ScrollView style={styles.viewboxContainer}>
        <ViewBox
          name="Ali"
          plot="69"
          title="Unpaid Bill"
          text="You have not paid the society bill for the previous 2 months. Please pay the bill before the end of this month or strict action will be taken against you"
        />
        <ViewBox
          name="Hassan"
          plot="32"
          title="Warning for Street Littering"
          text="You have been spotted many times littering in the streets. If you don't stop throwing garbage in the street strict action will be taken against you"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
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
    backgroundColor: "#e9e9e9",
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 35,
    marginBottom: 5,
    backgroundColor: "#ffffff",
  },
  viewboxContent: {
    marginLeft: 20,
  },
  text: {
    marginVertical: 6,
    fontSize: 14,
  },
});
