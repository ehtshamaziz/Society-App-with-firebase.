import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

export default function InputContainer(props) {
  const { colors } = useTheme();
  return (
    <View style={[styles.inputContainer, props.style]}>
      <Text style={[styles.text, {color: colors.text}]}>{props.text} </Text>
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholder={"Enter " + props.text + "..."}
        value={props.value}
        onChangeText={props.setValue}
        multiline={props.multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 18,
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 4,
    paddingVertical: 8,
    paddingHorizontal: 14,
    fontSize: 13,
    letterSpacing: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
  },
});
