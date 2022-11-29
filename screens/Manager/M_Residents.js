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
// import Constants from "expo-constants";

export default function M_Resident({ navigation }) {

  function ViewBox(props) {
    return (
      <Pressable onPress={props.func}>
        <View style={[styles.viewbox, props.viewBoxStyle]}>
          <Image
            style={styles.img}
            source={props.img}
          />
          <View style={[styles.viewboxContent, props.viewBoxContentStyle]}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{props.cnic}</Text>
            <Text style={styles.text}> Plot#{props.plot}</Text>
          </View>
        </View>
      </Pressable>
    );
  }

  function nav() {
    navigation.navigate("M_Resident_Info");
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icon name="users" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Manage Residents</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <TextInput
            style={styles.search_input}
            placeholder="Search"
          ></TextInput>
          <Pressable onPress={() => console.log("Search")}>
            <Icon name="search" size={22} solid color="#393E46" />
          </Pressable>
        </View>
        <View style={styles.filter_button}>
          <Pressable onPress={() => console.log("Filter")}>
            <Icon name="filter" size={32} color="#393E46" />
          </Pressable>
        </View>
      </View>

      <ScrollView>
        <View style={styles.viewboxContainer}>
          <ViewBox
            name="Humza"
            cnic="00000-0000000-0"
            plot="69"
            func={nav}
            img={require("../../assets/avatar1.png")}
          />
          <ViewBox
            name="Ehtsham"
            cnic="23431-2433232-4"
            plot="32"
            func={nav}
            img={require("../../assets/avatar2.png")}
          />
          <ViewBox
            name="Humza"
            cnic="00000-0000000-0"
            plot="69"
            func={nav}
            img={require("../../assets/avatar1.png")}
          />
          <ViewBox
            name="Ehtsham"
            cnic="23431-2433232-4"
            plot="32"
            func={nav}
            img={require("../../assets/avatar2.png")}
          />
          <ViewBox
            name="Humza"
            cnic="00000-0000000-0"
            plot="69"
            func={nav}
            img={require("../../assets/avatar1.png")}
          />
          <ViewBox
            name="Ehtsham"
            cnic="23431-2433232-4"
            plot="32"
            func={nav}
            img={require("../../assets/avatar2.png")}
          />
        </View>
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
  searchContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#00ADB5",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    flex: 4,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  search_input: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 24,
    color: "#808080",
    flex: 1,
  },
  filter_button: {
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },

  viewboxContainer: {
    paddingTop: 7,
    paddingHorizontal: 10,
    paddingBottom: 90,
    backgroundColor: "#e9e9e9",
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
