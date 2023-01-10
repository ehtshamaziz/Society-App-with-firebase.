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
import SvgImage from "../../assets/ManagerDashboard.svg";
import { useTheme } from "@react-navigation/native";

export default function M_Dashboard({ navigation }) {
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
          <Text style={[styles.headingSmall, { color: colors.primary }]}>Manager Dashboard</Text>
          <SvgImage width={240} height={180} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <DashboardItem
            text="Manage Residents"
            icon="users"
            navigateTo="M_Residents"
            iconBackground="#4169e1"
          />
          <DashboardItem
            text="Society Notices"
            icon="envelope-open-text"
            navigateTo="M_Notices"
            iconBackground="#ff4500"
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <DashboardItem
            text="Resident Complaints"
            icon="exclamation"
            navigateTo="M_Complaints"
            iconBackground="#E0144C"
          />
          <DashboardItem
            text="Maintenance Requests"
            icon="tools"
            navigateTo="M_Maintain_Requests"
            iconBackground="#00ADB5"
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <DashboardItem
            text="Logout"
            icon="sign-out-alt"
            navigateTo="M_Login"
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
    // paddingTop: Constants.statusBarHeight,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
  },

  bottomContainer: {
    flex: 1.8,
    justifyContent: "center",
    flexDirection: "column",
    paddingRight: 6,
    paddingLeft: 8,
  },
  headingSmall: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 18,
    marginTop: 8,
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
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
  },
});
