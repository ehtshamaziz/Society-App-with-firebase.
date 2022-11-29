import { Text, View, StyleSheet, Pressable, Image, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Constants from "expo-constants";

export default function M_Dashboard({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
        >
          <Text style={styles.headingSmall}>Manager Dashboard</Text>
          <Image
            style={{ width: 90, height: 90 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1001/1001209.png",
            }}
          />
          <Text style={styles.heading}>Society Management System</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Pressable
            onPress={() => navigation.navigate("M_Residents")}
            style={styles.dashBoardItem}
          >
            <Icon name="users" size={45} color="#393E46" />
            <Text style={styles.dashBoardItem_text}>Manage Residents</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("M_Notices")}
            style={styles.dashBoardItem}
          >
            <Icon name="sticky-note" size={45} solid color="#393E46" />
            <Text style={styles.dashBoardItem_text}>Society Notices</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Pressable
            onPress={() => navigation.navigate("M_Complaints")}
            style={styles.dashBoardItem}
          >
            <Icon name="exclamation" size={45} solid color="#393E46" />
            <Text style={styles.dashBoardItem_text}>Resident Complaints</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("M_Maintain_Requests")}
            style={styles.dashBoardItem}
          >
            <Icon name="envelope-open-text" size={45} solid color="#393E46" />
            <Text style={styles.dashBoardItem_text}>
              Resident Maintenance Requests
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Pressable
            onPress={() => navigation.navigate("M_Bills")}
            style={styles.dashBoardItem}
          >
            <Icon name="money-bill-wave" size={45} color="#393E46" />
            <Text style={styles.dashBoardItem_text}>Resident Bills</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("M_Login")}
            style={styles.dashBoardItem}
          >
            <Icon name="sign-out-alt" size={45} solid color="#393E46" />
            <Text style={styles.dashBoardItem_text}>Logout</Text>
          </Pressable>
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
    justifyContent: "flex-start",
    backgroundColor: "#00ADB5",
    alignItems: "center",
  },

  bottomContainer: {
    flex: 1.8,
    justifyContent: "center",
    flexDirection: "column",
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
    color: "#222831",
    marginBottom: 14,
  },
  dashBoardItem: {
    flex: 1,
    flexDirection: "column",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  dashBoardItem_text: {
    marginTop: 12,
    fontSize: 14,
    textAlign: "center",
    color: "#393E46",
  },
});
