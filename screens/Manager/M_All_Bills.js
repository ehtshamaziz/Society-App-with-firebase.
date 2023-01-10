// import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import CustomButton from "../../components/button";
import { useTheme } from "@react-navigation/native";
import HeadingView from "../../components/headingView";

function ViewBox(props) {
  const { colors } = useTheme();
  return (
    <View style={[styles.viewbox, { backgroundColor: colors.card }]}>
      <Image style={styles.img} source={props.img} />
      <View style={styles.viewboxContent}>
        <Text
          style={[
            styles.text,
            { fontWeight: "bold", fontSize: 16, color: colors.text },
          ]}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
}

export default function M_All_Bills() {
  // async function selectImage() {
  //   try {
  //     console.log("in select Image");
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.images],
  //     });
  //     console.log(res);
  //     const absolutePath = await RNFetchBlob.fs.realpath(res.uri);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log("Cancelled");
  //     } else {
  //       console.log("Other error: ", err);
  //     }
  //   }
  // }

  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Resident Bills" icon="money-bill-wave" />

      <ScrollView style={styles.viewboxContainer}>
        <ViewBox
          plot="69"
          title="Renovation Charges"
          img={require("../../assets/billTemplate.jpg")}
        />
        <ViewBox
          plot="32"
          title="Security Bill"
          img={require("../../assets/billTemplate.jpg")}
        />
      </ScrollView>

      <CustomButton
        text="Upload New Bill"
        icon="upload"
        style={{
          paddingVertical: 16,
          paddingHorizontal: 28,
          borderRadius: 50,
          marginHorizontal: 50,
          marginBottom: 60,
        }}
        func={selectImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingTop: Constants.statusBarHeight,
  },
  viewboxContainer: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 10,
  },
  viewboxContent: {
    marginLeft: 20,
  },
  text: {
    margin: 5,
  },
  img: {
    width: 150,
    height: 160,
    borderWidth: 1,
    borderColor: "#efefef",
  },
});
