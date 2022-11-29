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

export default function M_All_Bills() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icon name="money-bill-wave" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Society Bills</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/billTemplate.jpg")}
        />
      </View>
      <CustomButton
        text="Download Bill"
        icon="download"
        style={{
          paddingVertical: 16,
          paddingHorizontal: 28,
          borderRadius: 50,
          marginHorizontal: 50,
          marginBottom: 60,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    backgroundColor: "#e9e9e9",
    flex: 1,
    justifyContent: "space-between",
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
  imgContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  img: {
    width: 350,
    height: 360,
    borderWidth: 1,
    borderColor: "#efefef",
  },
});
