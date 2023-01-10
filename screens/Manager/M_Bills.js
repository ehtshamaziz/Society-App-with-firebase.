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
import HeadingView from "../../components/headingView";
import { useTheme } from "@react-navigation/native";

function ViewBox(props) {
  const { colors } = useTheme();
  return (
    <Pressable onPress={props.func}>
      <View style={[styles.viewbox, { backgroundColor: colors.card }]}>
        <Image style={styles.img} source={props.img} />
        <View style={styles.viewboxContent}>
          <Text style={[styles.text, { color: colors.text }]}>
            {props.name}
          </Text>
          <Text style={[styles.text, { color: colors.primary }]}>
            {" "}
            Plot#{props.plot}
          </Text>
          <Text
            style={[
              styles.text,
              { fontWeight: "bold", fontSize: 16, color: colors.text },
            ]}
          >
            Unpaid: {props.billTitle}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function M_Resident({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Unpaid Bills" icon="money-bill-wave" />

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
          marginHorizontal: 30,
          marginVertical: 15,
        }}
        func={() => navigation.navigate("M_All_Bills")}
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
    paddingTop: 5,
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginBottom: 7,
    marginHorizontal: 10,
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
