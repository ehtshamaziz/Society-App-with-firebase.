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
import CustomButton from "../../components/button";

export default function M_Compliants_Info() {
    return (
        <View>
            <View style={styles.topContainer}>
                <Icon name="users" size={32} solid color="#eeeeee" />
                <Text style={styles.heading}>Complaints Information</Text>
            </View>

            <View style={styles.midContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Complaints Title: </Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Resident Name: </Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Complaints Description: </Text>
                    <TextInput multiline={true} style={[styles.input, { height: 80 }]} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Complaints Response: </Text>
                    <TextInput multiline={true} style={[styles.input, { height: 100 }]} />
                </View>

                <CustomButton
                    text="Send Response"
                    icon="paper-plane"
                    style={{
                        paddingVertical: 22,
                        paddingHorizontal: 42,
                        marginTop: 56,
                        borderRadius: 50,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: "#00ADB5",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 25,
        flexDirection: "row",
        justifyContent: "center",
    },
    heading: {
        fontSize: 30,
        color: "#eeeeee",
        marginLeft: 10,
    },
    input: {
        backgroundColor: "#fff",
        marginTop: 4,
        marginBottom: 10,
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderWidth: 2,
        borderColor: "#eaeaea",
        fontSize: 18,
        letterSpacing: 1,
        width: 250,
    },

    midContainer: {
        alignItems: "center",
        padding: 30,
    },

    text: {
        fontSize: 20,
    },

    inputContainer: {
        alignItems: "flex-start",
        alignSelf: "flex-start",
        paddingHorizontal: 40,
        paddingTop: 20,
    },
});
