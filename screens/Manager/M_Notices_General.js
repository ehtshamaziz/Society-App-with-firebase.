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
      <View style={styles.viewboxContent}>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 16 }]}>
          {props.title}
        </Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
}

export default function M_Notices_Specific({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icon name="users" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>General Notices</Text>
      </View>

      <ScrollView style={styles.viewboxContainer}>
        <ViewBox
          plot="69"
          title="Unpaid Bill"
          text="You have not paid the society bill for the previous 2 months. Please pay the bill before the end of this month or strict action will be taken against you"
        />
        <ViewBox
          plot="32"
          title="Warning for Street Littering"
          text="You have been spotted many times littering in the streets. If you don't stop throwing garbage in the street strict action will be taken against you"
        />
      </ScrollView>

      <CustomButton
        text="Send New Notice"
        icon="paper-plane"
        style={{
          paddingVertical: 16,
          paddingHorizontal: 28,
          borderRadius: 50,
          marginHorizontal: 50,
          marginBottom: 60,
        }}
        func={() => navigation.navigate("M_Notices_General_New")}
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
    paddingHorizontal: 30,
    paddingVertical: 35,
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
    width: 45,
    height: 45,
  },
});
