import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

export default function Index({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#00ADB5" barStyle="default" />
      <View style={styles.topContainer}>
        <Image
          style={{ width: 115, height: 115 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1001/1001209.png",
          }}
        />
        <Text style={styles.heading}>Society Management System</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("M_Login")}
        >
          <Text style={styles.buttonText}>
            Login as Manager
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("R_Login")}
        >
          <Text style={styles.buttonText}>
            Login as Resident
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
    paddingVertical: 18,
    paddingHorizontal: 28,
    marginHorizontal: 5,
    margin: 15,
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 20,
    color: "#EEEEEE",
    textAlign: "center",
  },
});
