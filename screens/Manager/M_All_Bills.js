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

function ViewBox(props) {
  return (
    <View style={styles.viewbox}>
      <Image style={styles.img} source={props.img} />
      <View style={styles.viewboxContent}>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 16 }]}>
          {props.title}
        </Text>
      </View>
    </View>
  );
}

export default function M_All_Bills() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icon name="money-bill-wave" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Resident Bills</Text>
      </View>

      <ScrollView style={styles.viewboxContainer}>
        <ViewBox
          plot="69"
          title="Renovation Charges"
          img={require("../../assets/billTemplate.jpg")}
        />
        <ViewBox
          plot="32"
          title="Security Bill"
          img={require("../../assets/billTemplate.jpg")}
        />
      </ScrollView>

      <CustomButton
        text="Upload New Bill"
        icon="upload"
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
    // paddingTop: Constants.statusBarHeight,
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
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  viewboxContent: {
    marginLeft: 20,
  },
  text: {
    margin: 5,
  },
  img: {
    width: 150,
    height: 160,
    borderWidth: 1,
    borderColor: "#efefef",
  },
});
