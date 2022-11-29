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

export default function R_Complaints_Info() {
  return (
    <View>
      <View style={styles.topContainer}>
        <Icon name="exclamation-circle" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Complaint Information</Text>
      </View>

      <View style={styles.midContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Notice Title: </Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Notice Description: </Text>
          <TextInput multiline={true} style={[styles.input, { height: 100 }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#00ADB5",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    color: "#eeeeee",
    marginLeft: 10,
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 4,
    marginBottom: 10,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 2,
    borderColor: "#eaeaea",
    fontSize: 18,
    letterSpacing: 1,
    width: 250,
  },

  midContainer: {
    alignItems: "center",
    padding: 30,
  },

  text: {
    fontSize: 20,
  },

  inputContainer: {
    alignItems: "flex-start",
    alignSelf: "flex-start",
    paddingHorizontal: 40,
    paddingTop: 20,
  },
});
