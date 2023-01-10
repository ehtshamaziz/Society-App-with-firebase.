import { StyleSheet, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";

export default function FloatingButton(props) {
    const { colors } = useTheme();
  return (
    <Pressable
      style={[
        styles.floatingButton,
        { backgroundColor: colors.primary },
        props.style,
      ]}
      onPress={props.func}
    >
      {props.icon !== undefined && (
        <Icon name={props.icon} size={24} solid color="#eeeeee" />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
