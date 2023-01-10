import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import HeadingView from "../components/headingView";
import SvgImage from "../assets/Themes.svg";
import { useTheme } from "@react-navigation/native";

export default function Settings({ route }) {
  const { colors } = useTheme();
  const [isToggled, setIsToggled] = useState(false);
  const [count, setCount] = useState(0);

  const LightTheme = route.params.LightTheme;
  const DarkTheme = route.params.DarkTheme;

  function toggleTheme() {
    console.log(count);
    setCount(count + 1);
    setIsToggled(!isToggled);
    if (count % 2 == 0) {
      route.params.setTheme(DarkTheme);
    } else {
      route.params.setTheme(LightTheme);
    }
  }
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Theme Settings" icon="cog" />
      <View style={styles.topContainer}>
        <SvgImage width={260} height={200} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[styles.textBig, { color: colors.text }]}>Theme: </Text>
        <Text style={[styles.text, { color: colors.text }]}>Light</Text>
        <Switch
          onValueChange={toggleTheme}
          value={isToggled}
          style={styles.themeButton}
        />
        <Text style={[styles.text, { color: colors.text }]}>Dark</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topContainer: {
    alignItems: "center",
  },
  bottomContainer: {
    paddingVertical: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  textBig: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  themeButton: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});
