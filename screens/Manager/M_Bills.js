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
// import Constants from "expo-constants";

function ViewBox(props) {
  return (
    <Pressable onPress={props.func}>
      <View style={styles.viewbox}>
        <Image style={styles.img} source={props.img} />
        <View style={styles.viewboxContent}>
          <Text style={styles.text}>{props.name}</Text>
          <Text style={styles.text}> Plot#{props.plot}</Text>
          <Text style={[styles.text, {fontWeight: "bold", fontSize: 16}]}>Unpaid: {props.billTitle}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function M_Resident({ navigation }) {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icon name="users" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Unpaid Bills</Text>
      </View>

      <ScrollView>
        <View style={styles.viewboxContainer}>
          <ViewBox
            name="Humza"
            plot="69"
            img={require("../../assets/avatar1.png")}
            billTitle="Renovation Charges"
          />
          <ViewBox
            name="Ehtsham"
            plot="32"
            img={require("../../assets/avatar2.png")}
            billTitle="Security Bill"
          />
          <ViewBox
            name="Humza"
            plot="69"
            img={require("../../assets/avatar1.png")}
            billTitle="Renovation Charges"
          />
          <ViewBox
            name="Ehtsham"
            plot="32"
            img={require("../../assets/avatar2.png")}
            billTitle="Security Bill"
          />
          <ViewBox
            name="Humza"
            plot="69"
            img={require("../../assets/avatar1.png")}
            billTitle="Renovation Charges"
          />
          <ViewBox
            name="Ehtsham"
            plot="32"
            img={require("../../assets/avatar2.png")}
            billTitle="Security Bill"
          />
        </View>
      </ScrollView>
      <CustomButton
        text="View All Bills"
        icon="money-bill"
        style={{
          paddingVertical: 16,
          paddingHorizontal: 28,
          borderRadius: 50,
          marginHorizontal: 50,
          marginBottom: 120,
          marginTop: 10,
        }}
        func={() => navigation.navigate("M_All_Bills")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
  },
  topContainer: {
    backgroundColor: "#00ADB5",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    color: "#eeeeee",
    marginLeft: 10,
  },
  viewboxContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#e9e9e9",
    paddingTop: 5,
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginBottom: 7,
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
