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

export default function M_Notices({navigation}) {
  return (
    <View>
      <View style={styles.topContainer}>
        <Icon name="sticky-note" size={32} solid color="#eeeeee" />
        <Text style={styles.heading}>Notices</Text>
      </View>

      <View style={styles.viewboxContainer}>
        <Text style={styles.smallheading}>Notices: </Text>

        <Pressable onPress={() => navigation.navigate("M_Notices_Specific")}>
          <View style={styles.viewbox}>
            <Icon
              name="exclamation-triangle"
              size={30}
              solid
              color="#00ADB5"
              style={{ marginHorizontal: 2 }}
            />
            <View style={styles.viewboxContent}>
              <Text style={styles.contentText}>Specific</Text>
            </View>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("M_Notices_General")}>
          <View style={styles.viewbox}>
            <Icon name="users" size={30} solid color="#00ADB5" />
            <View style={styles.viewboxContent}>
              <Text style={styles.contentText}>General</Text>
            </View>
          </View>
        </Pressable>

        <Text style={[styles.smallheading, { marginTop: 60 }]}>
          Notices Summary
        </Text>
        <View style={styles.bigview}>
          <View style={styles.viewbox2}>
            <Icon
              name="exclamation-triangle"
              size={40}
              solid
              color="#00ADB5"
              style={{ marginHorizontal: 2 }}
            />

            <View style={styles.viewbox2Content}>
              <Text style={{ fontSize: 20 }}>Specific</Text>
              <Text style={{ fontSize: 16, marginTop: 6 }}>32</Text>
            </View>
          </View>
          <View style={styles.viewbox2}>
            <Icon name="users" size={40} solid color="#00ADB5" />
            <View style={styles.viewbox2Content}>
              <Text style={{ fontSize: 20 }}>General</Text>
              <Text style={{ fontSize: 16, marginTop: 6 }}>4</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentText: {
    justifyContent: "center",
    fontSize: 22,
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
  smallheading: {
    padding: 10,
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  viewboxContainer: {
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 34,
    paddingVertical: 20,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  bigview: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  viewboxContent: {
    marginLeft: 20,
  },

  viewbox2: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: "#ffffff",
  },
  viewbox2Content: {
    marginLeft: 12,
    alignItems: "center",
  },
});
