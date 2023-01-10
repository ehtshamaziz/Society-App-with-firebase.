import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

import Index from "./screens/Index";
import Settings from "./screens/Settings";
// import MenuBar from "./components/menuBar";

import M_Login from "./screens/Manager/M_Login";
import M_Dashboard from "./screens/Manager/M_Dashboard";
import M_Residents from "./screens/Manager/M_Residents";
import M_Resident_Info from "./screens/Manager/M_Resident_Info";
import M_Resident_New from "./screens/Manager/M_Resident_New";
import M_Notices from "./screens/Manager/M_Notices";
import M_Notices_Specific from "./screens/Manager/M_Notices_Specific";
import M_Notices_Specific_New from "./screens/Manager/M_Notices_Specific_New";
import M_Notices_General from "./screens/Manager/M_Notices_General";
import M_Notices_General_New from "./screens/Manager/M_Notices_General_New";
import M_Maintain_Requests from "./screens/Manager/M_Maintain_Requests";
import M_Maintain_Info from "./screens/Manager/M_Maintain_Info";
import M_Bills from "./screens/Manager/M_Bills";
import M_Complaints_Info from "./screens/Manager/M_Complaints_Info";
import M_Complaints from "./screens/Manager/M_Complaints";
import M_All_Bills from "./screens/Manager/M_All_Bills";

import R_Login from "./screens/Resident/R_Login";
import R_Dashboard from "./screens/Resident/R_Dashboard";
import R_Notices from "./screens/Resident/R_Notices";
import R_Bills from "./screens/Resident/R_Bills";
import R_Complaints from "./screens/Resident/R_Complaints";
import R_Complaints_New from "./screens/Resident/R_Complaints_New";
import R_Complaints_Info from "./screens/Resident/R_Complaints_Info";
import R_Maintain_Requests from "./screens/Resident/R_Maintain_Requests";
import R_Maintain_Info from "./screens/Resident/R_Maintain_Info";
import R_Maintain_New from "./screens/Resident/R_Maintain_New";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LightTheme = {
  dark: false,
  colors: {
    primary: "#00ADB5",
    background: "#f0f0f0",
    card: "#ffffff",
    text: "#333333",
    border: "#cccccc",
    notification: "#00ADB5",
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    primary: "#00ADB5",
    background: "#222831",
    card: "#393E46",
    text: "#ffffff",
    border: "#919191",
    notification: "#00ADB5",
  },
};

function ManagerDrawerNavigator({ navigation }) {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")} style={{ marginRight: 18 }}>
            <Icon name="cog" size={28} solid color={colors.text} />
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen
        name="M_Dashboard"
        component={M_Dashboard}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="M_Residents"
        component={M_Residents}
        options={{ title: "Manage Residents" }}
      />
      <Drawer.Screen
        name="M_Notices"
        component={M_Notices}
        options={{ title: "Society Notices" }}
      />
      <Drawer.Screen
        name="M_Maintain_Requests"
        component={M_Maintain_Requests}
        options={{ title: "Maintenance Requests" }}
      />
      <Drawer.Screen
        name="M_Complaints"
        component={M_Complaints}
        options={{ title: "Complaints" }}
      />
    </Drawer.Navigator>
  );
}

function ResidentDrawerNavigator({ navigation }) {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate("Settings")}
            style={{ marginRight: 18 }}
          >
            <Icon name="cog" size={28} solid color={colors.text} />
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen
        name="R_Dashboard"
        component={R_Dashboard}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="R_Notices"
        component={R_Notices}
        options={{ title: "Society Notices" }}
      />
      <Drawer.Screen
        name="R_Maintain_Requests"
        component={R_Maintain_Requests}
        options={{ title: "Maintenance Requests" }}
      />
      <Drawer.Screen
        name="R_Complaints"
        component={R_Complaints}
        options={{ title: "Complaints" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          initialParams={{ theme, setTheme, LightTheme, DarkTheme }}
        />
        <Stack.Screen
          name="M_Login"
          component={M_Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="R_Login"
          component={R_Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resident"
          component={ResidentDrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Manager"
          component={ManagerDrawerNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="M_Complaints_Info" component={M_Complaints_Info} />
        <Stack.Screen name="M_Maintain_Info" component={M_Maintain_Info} />
        <Stack.Screen name="M_Resident_Info" component={M_Resident_Info} />
        <Stack.Screen name="M_Resident_New" component={M_Resident_New} />
        <Stack.Screen
          name="M_Notices_Specific"
          component={M_Notices_Specific}
        />
        <Stack.Screen
          name="M_Notices_Specific_New"
          component={M_Notices_Specific_New}
        />
        <Stack.Screen name="M_Notices_General" component={M_Notices_General} />
        <Stack.Screen
          name="M_Notices_General_New"
          component={M_Notices_General_New}
        />
        <Stack.Screen name="M_All_Bills" component={M_All_Bills} />
        <Stack.Screen name="R_Complaints_New" component={R_Complaints_New} />
        <Stack.Screen name="R_Complaints_Info" component={R_Complaints_Info} />
        <Stack.Screen name="R_Maintain_Info" component={R_Maintain_Info} />
        <Stack.Screen name="R_Maintain_New" component={R_Maintain_New} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
