import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function HeadingView(props) {
    const { colors } = useTheme();
  return (
    <View style={[styles.topContainer, {borderBottomColor: colors.border}, props.viewStyle]}>
      <Icon
        name={props.icon}
        size={32}
        solid
        color={colors.text}
        style={{ marginRight: 6 }}
      />
      <Text style={[styles.heading, {color: colors.text}]}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    marginLeft: 10,
  },
});
