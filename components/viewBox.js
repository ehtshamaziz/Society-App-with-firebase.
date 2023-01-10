import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";

export default function HeadingView(props) {
  const { colors } = useTheme();
  return (
    <Pressable onPress={props.func}>
      <View style={[styles.viewbox, { backgroundColor: colors.card }]}>
        {props.icon && (
          <View style={styles.viewboxIcon}>
            <Icon name={props.icon} size={42} color={colors.text} />
          </View>
        )}
        <View style={styles.viewboxContent}>
          <Text style={[styles.text, { fontSize: 14, color: colors.primary }]}>
            {props.title}
          </Text>
          <Text style={[styles.text, { color: colors.border }]}>
            {props.text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  viewbox: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginBottom: 10,
    shadowColor: "#000",
    elevation: 4,
  },
  viewboxIcon: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: "center",
  },
  viewboxContent: {
    marginLeft: 10,
    flex: 4,
  },
  text: {
    marginVertical: 4,
    fontSize: 12,
  },
});
