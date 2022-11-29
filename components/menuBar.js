import {
  Text,
  View,
  StyleSheet,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function MenuBar() {
  return (
    <View style={styles.menuBar}>
      <StatusBar backgroundColor="#222831" barStyle="light-content" />
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Icon name="bars" size={22} color="#EEEEEE" />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Icon reverse name="bell" size={22} color="#EEEEEE" />
        <Icon
          reverse
          name="user"
          size={22}
          color="#EEEEEE"
          style={styles.icons}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: "#222831",
    paddingVertical: 16,
    paddingLeft: 28,
    paddingRight: 50,
    flexDirection: "row",
    marginLeft: -20
  },
  icons: {
    marginLeft: 26,
  },
});
