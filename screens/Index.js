import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import CustomButton from "../components/button";

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

      <ImageBackground
        source={require("../assets/pattern.jpg")}
        style={styles.imgBackground}
      >
        <View style={styles.bottomContainer}>
          <CustomButton
            text="Login as Resident"
            func={() => navigation.navigate("R_Login")}
            style={{ marginBottom: 20 }}
          />
          <CustomButton
            text="Login as Manager"
            func={() => navigation.navigate("M_Login")}
          />
        </View>
      </ImageBackground>
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
    padding: 25,
    alignItems: "center",
    marginBottom: -140,
    zIndex: 1,
  },

  imgBackground: {
    paddingTop: 140,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 45,
  },
  heading: {
    margin: 20,
    fontSize: 24,
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
  // button: {
  //   backgroundColor: "#00ADB5",
  //   paddingVertical: 16,
  //   paddingHorizontal: 24,
  //   marginHorizontal: 5,
  //   margin: 15,
  //   borderRadius: 35,
  // },
  // buttonText: {
  //   fontSize: 16,
  //   color: "#EEEEEE",
  //   textAlign: "center",
  // },
});