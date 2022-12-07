import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import BackButton from "./components/BackButton";
import CustomIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import BlackButton from "./components/BlackButton";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
const PersonalJobs = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: "white",
            width: 280,
            height: 310,
            alignSelf: "center",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: -9,
              right: 13,
              backgroundColor: "black",
              height: 20,
              width: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={()=>{setIsModalVisible(false)}}
          >
            <Text style={{ color: "white" }}>x</Text>
          </TouchableOpacity>

          <IonIcon
            name="ios-checkmark-circle-outline"
            size={80}
            color="#F164b2"
          />
          <Text style={styles.head}>Your Booking is Confirmed</Text>
        </View>
      </Modal>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: 20,
          width: "100%",
        }}
      >
        <BackButton />
        <Text style={styles.head}>Personal Jobs</Text>
        <View
          style={{
            backgroundColor: "white",
            zIndex: 1000,
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomIcon name={"bar-chart-2"} color={"#F164b2"} />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <View style={styles.inputfields}>
          <TextInput placeholder={"First name"} />
        </View>
        <View style={styles.inputfields}>
          <TextInput placeholder={"SurName"} />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.inputfield}>
          <TextInput placeholder={"Mobile Number"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Pickup"} />
        </View>
        <View style={{ width: "80%" }}>
          <Text
            style={{
              display: "flex",
              textAlign: "right",
              color: "#F164b2",
              fontSize: 14,
              marginTop: 5,
            }}
          >
            Add stop Point
          </Text>
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Destination"} />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <View style={styles.inputfields}>
            <Text>Time</Text>
            <TextInput placeholder={"hh:mm:ss"} />
          </View>
          <View style={styles.inputfields}>
            <Text>Date</Text>
            <TextInput placeholder={"dd-mm-yyyy"} />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <BlackButton
            text={"Book Now"}
            onPress={() => {
              setIsModalVisible(true);
            }}
          />
        </View>
      </View>
    </>
  );
};

export default PersonalJobs;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
  },
  icon: {
    transform: [{ skewY: "180deg" }],
  },
  inputfields: {
    height: 55,
    width: 150,
    backgroundColor: "white",
    marginRight: 10,
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },

  inputfield: {
    height: 45,
    width: 310,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
  },
});
