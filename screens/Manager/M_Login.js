import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  StatusBar
} from "react-native";
import Constants from "expo-constants";

export default function M_Login({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#222831" barStyle="light-content" />
      <View style={styles.topContainer}>
        <Image
          style={{ width: 115, height: 115 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1001/1001209.png",
          }}
        />
        <Text style={styles.heading}>Society Management System</Text>
        <Text style={[styles.heading, { fontSize: 22, color: "#27496D" }]}>
          Manager Login
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <TextInput placeholder="Name" style={styles.inputs} />
        <TextInput placeholder="Password" style={styles.inputs} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("M_Dashboard")}
        >
          <Text style={{ fontSize: 18, color: "#EEEEEE", textAlign: "center" }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
  },

  topContainer: {
    flex: 1.5,
    justifyContent: "center",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: "#00ADB5",
    padding: 10,
    alignItems: "center",
  },

  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 45,
  },
  heading: {
    margin: 20,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#eeeeee",
  },
  inputs: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    backgroundColor: "#F1F1F1",
    margin: 5,
    color: "#808080",
  },
  button: {
    backgroundColor: "#00ADB5",

    paddingVertical: 12,
    paddingHorizontal: 24,
    marginHorizontal: 5,
    marginTop: 15,
    borderRadius: 30,
  },
});
