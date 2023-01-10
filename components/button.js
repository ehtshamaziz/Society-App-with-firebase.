import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";
export default function CustomButton(props) {
  const { colors } = useTheme();
  return (
    <Pressable style={[styles.button, {backgroundColor: colors.primary}, props.style]} onPress={props.func}>
      
      {props.icon !== undefined && (
        <Icon
          name={props.icon}
          size={20}
          solid
          color="#eeeeee"
          style={{ marginRight: 10 }}
        />
      )}

      <Text
        style={[
          {
            fontSize: 16,
            color: "#EEEEEE",
            textAlign: "center",
          },
          props.textStyle,
        ]}
      >
        {props.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignItems: "center", 
    justifyContent: "center",
    marginVertical: 5,
  },
});