// import { StatusBar } from "expo-status-bar";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
// import Constants from "expo-constants";

function ViewBox(props) {
    return (
        <Pressable onPress={props.func}>
            <View style={styles.viewbox}>
                <Image
                    style={styles.img}
                    source={props.img}
                />
                <View style={styles.viewboxContent}>
                    <Text style={styles.smallheading}>{props.title}</Text>
                    <Text style={styles.text}>{props.name}</Text>

                </View>
            </View>
        </Pressable>
    );
}

export default function M_Complaints({ navigation }) {

    function nav() {
        navigation.navigate("M_Complaints_Info");
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Icon name="users" size={32} solid color="#eeeeee" />
                <Text style={styles.heading}>Maintannence Requests</Text>
            </View>



            <ScrollView>
                <View style={styles.viewboxContainer}>
                    <ViewBox
                        title="Plumbing Maintenance Request"
                        name="Humza"

                        func={nav}
                        img={require("../../assets/avatar1.png")}
                    />
                    <ViewBox
                        title="Electricity Maintenance Request"
                        name="Ehtsham"

                        func={nav}
                        img={require("../../assets/avatar2.png")}
                    />
                    <ViewBox
                        title="Plumbing Maintenance Request"
                        name="Humza"

                        func={nav}
                        img={require("../../assets/avatar1.png")}
                    />
                    <ViewBox
                        title="Electricity Maintenance Request"
                        name="Ehtsham"

                        func={nav}
                        img={require("../../assets/avatar2.png")}
                    />
                    <ViewBox
                        title="Cable Maintenance Request"
                        name="Humza"

                        func={nav}
                        img={require("../../assets/avatar1.png")}
                    />
                    <ViewBox
                        title="Plumbing Maintenance Request"
                        name="Ehtsham"

                        func={nav}
                        img={require("../../assets/avatar2.png")}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "center",
        // paddingTop: Constants.statusBarHeight,
    },
    topContainer: {
        backgroundColor: "#00ADB5",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 15,
        flexDirection: "row",
        justifyContent: "center",
    },
    heading: {
        fontSize: 30,
        color: "#eeeeee",
        marginLeft: 10,
    },
    searchContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: "#00ADB5",
    },

    viewboxContainer: {
        paddingTop: 7,
        paddingHorizontal: 10,
        paddingBottom: 90,
        backgroundColor: "#e9e9e9",
    },
    viewbox: {
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginBottom: 7,
        backgroundColor: "#ffffff",
    },
    viewboxContent: {
        marginLeft: 20,
    },
    smallheading: {
        fontSize: 18,
    },
    text: {
        margin: 5,
    },
    img: {
        width: 65,
        height: 65,
        borderRadius: 50,
    },
});
