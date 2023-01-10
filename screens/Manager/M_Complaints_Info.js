// import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import HeadingView from "../../components/headingView";
import SvgImage from "../../assets/Complaint.svg";
import InputContainer from "../../components/inputContainer2";
import CustomButton from "../../components/button";
import { useEffect, useState, } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


export default function M_Complaints_Info({ navigation, route }) {
  const [response, setResponse] = useState("");
  const [complaints, setComplaints] = useState();
  const firestore = firebase.firestore();

  useEffect(() => {

    firestore.collection("complaints").doc(route.params.id).get().then((doc) => {
      setComplaints(doc.data());
      console.log(doc.data());
      if (doc.data().response) {
        setResponse(doc.data().response)
      }
    })
  }, [])

  function sendData() {
    console.log("Signup Enter");
    console.log(route.params.id);
    // STORE USER DATA INTO CLOUD FIRESTORE
    firestore
      .collection("complaints")
      .doc(route.params.id)
      .set({
        title: complaints.title,
        description: complaints.description,
        cnic: complaints.cnic,
        response: response,
        category: complaints.category,
      })
      .then(() => {
        navigation.navigate('M_Complaints');
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  return (
    <View style={styles.mainContainer}>
      <HeadingView text="Complaint Info" icon="envelope-open-text" />
      <View style={styles.topContainer}>
        <SvgImage width={220} height={160} />
      </View>
      {complaints &&
        <View style={styles.midContainer}>
          <InputContainer text="Title" value={route.params.title} disabled={true}
            editable={false} />
          <InputContainer
            text="Description"
            multiline={true}
            inputStyle={{ height: 75 }}
            value={route.params.description}
            editable={false}
          />
          <InputContainer
            text="Response"
            multiline={true}
            inputStyle={{ height: 75 }}
            value={response}
            setValue={setResponse}
          />
        </View>
      }
      <CustomButton
        text="Send Response"
        icon="paper-plane"
        style={{
          marginTop: 0,
          marginHorizontal: 20,
        }}
        func={sendData}
      />
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
  input: {
    backgroundColor: "#fff",
    marginTop: 6,
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    fontSize: 13,
    letterSpacing: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
  },

  midContainer: {
    paddingTop: 30,
    paddingHorizontal: 6,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
});
