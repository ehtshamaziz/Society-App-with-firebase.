import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
// import Constants from "expo-constants";
import SvgImage from "../../assets/ResidentDashboard.svg";
import { useTheme } from "@react-navigation/native";

export default function R_Dashboard({ navigation }) {
  const { colors } = useTheme();
  function DashboardItem(props) {
    return (
      <Pressable
        onPress={() => navigation.navigate(props.navigateTo)}
        style={[styles.dashBoardItem, { backgroundColor: colors.card }]}
      >
        <View
          style={{
            backgroundColor: props.iconBackground,
            borderRadius: 100,
            width: 70,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name={props.icon} size={30} color="#fff" />
        </View>
        <Text style={[styles.dashBoardItem_text, { color: colors.text }]}>{props.text}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.mainContainer}>
      {/* <StatusBar backgroundColor="red" style="dark-content" /> */}
      <View style={styles.topContainer}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
        >
          <Text style={[styles.headingSmall, { color: colors.primary }]}>Resident Dashboard</Text>
          <SvgImage width={240} height={180} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <DashboardItem
            text="Complaints"
            icon="exclamation"
            navigateTo="R_Complaints"
            iconBackground="#E0144C"
          />
          <DashboardItem
            text="Society Notices"
            icon="envelope-open-text"
            navigateTo="R_Notices"
            iconBackground="#ff4500"
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <DashboardItem
            text="Maintenance Requests"
            icon="tools"
            navigateTo="R_Maintain_Requests"
            iconBackground="#00ADB5"
          />
          <DashboardItem
            text="Logout"
            icon="sign-out-alt"
            navigateTo="R_Login"
            iconBackground="#242424"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  bottomContainer: {
    flex: 1.8,
    justifyContent: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  heading: {
    margin: 12,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#eeeeee",
  },
  headingSmall: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 18,
    marginTop: 8
  },
  dashBoardItem: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowRadius: 4.65,
    elevation: 6,
  },
  dashBoardItem_text: {
    marginTop: 12,
    fontSize: 14,
    textAlign: "center",
  },
});
