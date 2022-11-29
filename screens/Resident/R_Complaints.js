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
    <Pressable onPress={props.func}>
      <View style={styles.viewbox}>
        <View style={styles.viewboxContent}>
          <Text style={[styles.text, { fontWeight: "bold", fontSize: 16 }]}>
            {props.title}
          </Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function R_Notices({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Icon name="exclamation-circle" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Complaints</Text>
      </View>

      <ScrollView style={styles.viewboxContainer}>
        <ViewBox
          title="Noise From the Adjacent Room"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet velit mauris, id vestibulum tellus ultricies nec. Aliquam fermentum suscipit faucibus."
          func={() => navigation.navigate("R_Complaints_Info")}
        />
        <ViewBox
          title="Rude Staff"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet velit mauris, id vestibulum tellus ultricies nec. Aliquam fermentum suscipit faucibus."
          func={() => navigation.navigate("R_Complaints_Info")}
        />
      </ScrollView>
      <CustomButton
        text="Add a Complaint"
        icon="plus"
        style={{
          paddingVertical: 16,
          paddingHorizontal: 28,
          borderRadius: 50,
          marginHorizontal: 50,
          marginTop: 100,
        }}
        func={() => navigation.navigate("R_Complaints_New")}
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
    paddingHorizontal: 30,
    paddingVertical: 35,
    marginBottom: 5,
    backgroundColor: "#ffffff",
  },
  viewboxContent: {
    marginLeft: 20,
  },
  text: {
    marginVertical: 6,
    fontSize: 14,
  },
});
