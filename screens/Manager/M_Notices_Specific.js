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

function ViewBox(props) {
  return (
    <View style={styles.viewbox}>
      <Image style={styles.img} source={props.img} />
      <View style={styles.viewboxContent}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>Plot #{props.plot}</Text>
        <Text style={styles.text}>Notice: {props.title}</Text>
      </View>
    </View>
  );
}

export default function M_Notices_Specific() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icon name="exclamation-triangle" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Specific Notices</Text>
      </View>

      <ScrollView style={styles.viewboxContainer}>
        <ViewBox name="Humza" plot="69" title="Not paid society bill"
          img={require("../../assets/avatar1.png")}
        />
        <ViewBox
          name="Ehtsham"
          plot="32"
          title="Warning for littering in the street"
          img={require("../../assets/avatar2.png")}
        />
        <ViewBox name="Humza" plot="69" title="Not paid society bill" img={require("../../assets/avatar1.png")} />
        <ViewBox name="Ehtsham" plot="32" title="Not paid society bill" img={require("../../assets/avatar2.png")} />
        <ViewBox
          name="Humza"
          plot="69"
          title="Warning for littering in the street"
          img={require("../../assets/avatar1.png")}

        />
        <ViewBox
          name="Ehtsham"
          plot="32"
          title="Warning for littering in the street"
          img={require("../../assets/avatar2.png")}
        />
        <ViewBox
          name="Humza"
          plot="69"
          title="Warning for littering in the street"
          img={require("../../assets/avatar1.png")}

        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
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
    backgroundColor: "#e9e9e9",
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginBottom: 5,
    backgroundColor: "#ffffff",
  },
  viewboxContent: {
    marginLeft: 20,
  },
  text: {
    margin: 5,
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
});
