// import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import FloatingButton from "../../components/floatingButton";
import HeadingView from "../../components/headingView";
import ViewBox from "../../components/viewBox";

export default function R_Complaints({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Complaints" icon="envelope-open-text" />
      <ScrollView style={styles.viewboxContainer}>
        <ViewBox
          title="Violent Neighbour"
          text="Violation"
          func={() => navigation.navigate("R_Complaints_Info")}
          icon="fist-raised"
        />
        <ViewBox
          title="Suspicious People Wandering at Night"
          text="Security"
          func={() => navigation.navigate("R_Complaints_Info")}
          icon="user-secret"
        />
        <ViewBox
          title="Noise From the Adjacent Room"
          text="Violation"
          func={() => navigation.navigate("R_Complaints_Info")}
          icon="fist-raised"
        />
      </ScrollView>
      <FloatingButton
        icon="plus"
        func={() => navigation.navigate("R_Complaints_New")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  viewboxContainer: {
    paddingHorizontal: 4,
  },
});
