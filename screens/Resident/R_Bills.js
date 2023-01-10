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

export default function M_All_Bills() {
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Society Bills" icon="money-bill-wave" />
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
    flex: 1,
    paddingHorizontal: 20
  },
  imgContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  img: {
    width: 350,
    height: 360,
    borderWidth: 1,
    borderColor: "#efefef",
  },
});
