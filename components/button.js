import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";

export default function CustomButton(props) {
  return (
    <Pressable style={[styles.button, props.style]} onPress={props.func}>
      
      {props.icon !== undefined && (
        <Icon
          name={props.icon}
          size={20}
          solid
          color="#eeeeee"
          style={{ marginRight: 8 }}
        />
      )}

      <Text
        style={[
          {
            fontSize: 18,
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
    backgroundColor: "#00ADB5",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: "center", 
    justifyContent: "center",
  },
});