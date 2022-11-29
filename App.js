import { Text, View, StyleSheet, Pressable, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

import Index from "./screens/Index";
import MenuBar from "./components/menuBar";
import M_Login from "./screens/Manager/M_Login";
import M_Dashboard from "./screens/Manager/M_Dashboard";
import M_Residents from "./screens/Manager/M_Residents";
import M_Resident_Info from "./screens/Manager/M_Resident_Info";
import M_Notices from "./screens/Manager/M_Notices";
import M_Notices_Specific from "./screens/Manager/M_Notices_Specific";
import M_Notices_General from "./screens/Manager/M_Notices_General";
import M_Notices_General_New from "./screens/Manager/M_Notices_General_New";
import M_Maintain_Requests from "./screens/Manager/M_Maintain_Requests";
import M_Bills from "./screens/Manager/M_Bills";
import M_Complaints from "./screens/Manager/M_Complaints";
import M_Complaints_Info from "./screens/Manager/M_Complaints_Info";
import M_All_Bills from "./screens/Manager/M_All_Bills";

import R_Login from "./screens/Resident/R_Login";
import R_Dashboard from "./screens/Resident/R_Dashboard";
import R_Notices from "./screens/Resident/R_Notices";
import R_Bills from "./screens/Resident/R_Bills";
import R_Complaints from "./screens/Resident/R_Complaints";
import R_Complaints_New from "./screens/Resident/R_Complaints_New";
import R_Complaints_Info from "./screens/Resident/R_Complaints_Info";
import R_Maintain_Requests from "./screens/Resident/R_Maintain_Requests";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="M_Login"
          component={M_Login}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="M_Dashboard"
          component={M_Dashboard}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="M_Residents"
          component={M_Residents}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />

        <Stack.Screen
          name="M_Resident_Info"
          component={M_Resident_Info}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />

        <Stack.Screen
          name="M_Notices"
          component={M_Notices}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />

        <Stack.Screen
          name="M_Notices_Specific"
          component={M_Notices_Specific}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="M_Notices_General"
          component={M_Notices_General}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="M_Notices_General_New"
          component={M_Notices_General_New}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />

        <Stack.Screen
          name="M_Maintain_Requests"
          component={M_Maintain_Requests}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="M_Bills"
          component={M_Bills}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="M_All_Bills"
          component={M_All_Bills}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="M_Complaints"
          component={M_Complaints}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="M_Complaints_Info"
          component={M_Complaints_Info}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />

        <Stack.Screen
          name="R_Dashboard"
          component={R_Dashboard}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />

        <Stack.Screen
          name="R_Notices"
          component={R_Notices}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="R_Maintain_Requests"
          component={R_Maintain_Requests}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="R_Complaints"
          component={R_Complaints}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="R_Complaints_New"
          component={R_Complaints_New}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="R_Complaints_Info"
          component={R_Complaints_Info}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />
        <Stack.Screen
          name="R_Bills"
          component={R_Bills}
          options={{
            headerStyle: {
              backgroundColor: "#222831",
            },
            headerBackVisible: "false​",
            headerTitle: () => <MenuBar />,
          }}
        />

        <Stack.Screen
          name="R_Login"
          component={R_Login}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
