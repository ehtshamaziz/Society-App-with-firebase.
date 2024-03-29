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
import SvgImage from "../../assets/Complaint.svg";
import InputContainer from "../../components/inputContainer2";

export default function R_Complaints_Info() {
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Complaint Info" icon="envelope-open-text" />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      <View style={styles.midContainer}>
        <InputContainer text="Title" />
        <InputContainer
          text="Description"
          multiline={true}
          inputStyle={{ height: 100 }}
        />
        <InputContainer
          text="Response"
          multiline={true}
          inputStyle={{ height: 100 }}
        />
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
  input: {
    backgroundColor: "#fff",
    marginTop: 6,
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    fontSize: 13,
    letterSpacing: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
  },

  midContainer: {
    paddingTop: 20,
    paddingHorizontal: 6,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
});
