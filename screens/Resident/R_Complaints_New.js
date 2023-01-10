// import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/button";
import HeadingView from "../../components/headingView";
import SvgImage from "../../assets/Add.svg";

export default function R_Complaints_New() {
  return (
    <View style={styles.mainContainer}>
      <HeadingView
        text="Add Complaint"
        icon="envelope-open-text"
        viewStyle={{ marginBottom: 30 }}
      />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      <View style={styles.midContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Complaint Title: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Complaint Title..."
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Category: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Complaint Category..."
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Complaint Description: </Text>
          <TextInput
            multiline={true}
            style={[styles.input, { height: 100 }]}
            placeholder="Enter Complaint Description..."
          />
        </View>

        <CustomButton
          text="Add Complaint"
          icon="plus"
          style={{
            marginTop: 0,
            marginHorizontal: 20,
          }}
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
    marginBottom: 4,
    paddingVertical: 8,
    paddingHorizontal: 14,
    fontSize: 13,
    letterSpacing: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
  },

  midContainer: {
    paddingTop: 25,
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
