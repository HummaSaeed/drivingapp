import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-elements";
import map from "../assets/map.png";
import GreenButton from "./components/GreenButton";
import BlackButton from "./components/BlackButton";
import panic from '../assets/panic.png'

const Showpanic = () => {
    const [progressJobs, setprogressJobs] = useState(false);
    const [pickup, setpickup] = useState(false);
    const [pickingUp, setpickingUp] = useState(false);
    const [waiting, setwaiting] = useState(false);
    const [inProgress, setinProgress] = useState(true);
    const [showModal, setshowModal] = useState(false);
    const [panicModal, setpanicModal] = useState(true);
    const [showwaitingModal, setshowwaitingModal] = useState(false);
    const [isCancel, setisCancel] = useState(false);
  return (
    <SafeAreaView
    style={{
      height: "100%",
      width: "100%",
      backgroundColor: "white",
    }}
  >
      <Modal isVisible={panicModal}>
        <View
          style={{
            backgroundColor: "white",
            width: 280,
            height: 240,
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <View style={{display:'flex',alignItems:'center',marginTop:20}}>
          <Image source={panic}/>
          </View>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 26,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Panic
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 14,
              textAlign: "center",
              marginTop: 13,
              paddingLeft: 40,
              paddingRight: 40,
            }}
          >
            Do you want to active?
          </Text>
          <View style={{ display: "flex", flexDirection: "row",padding:5,paddingLeft:15 }}>
            <TouchableOpacity style={styles.buttonyes} onPress={()=>setpanicModal(false)}>
              <Text style={styles.buttonTextyes}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonyes}>
              <Text style={styles.buttonTextyes}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
       {!waiting ? (
        <View style={styles.topbar}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 30,
                height: 30,
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <CustomIcon name="ellipsis-vertical" color="#F164b2" size={20} />
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                paddingLeft: 25,
                paddingRight: 25,
                borderColor: "white",
                marginLeft: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 36 }}>00.00</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                paddingLeft: 20,
                paddingRight: 20,
                borderColor: "white",
                marginLeft: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 36 }}>00.00</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.topbar}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 30,
                height: 30,
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <CustomIcon name="ellipsis-vertical" color="#F164b2" size={20} />
            </TouchableOpacity>
            <View
              style={{
                paddingRight: 25,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 36 }}>00.00</Text>
            </View>
          </View>
        </View>
      )}
      <View style={{ height: "100%" }}>
        <Image source={map} />
      </View>
      {inProgress ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            height: 280,
            paddingTop: 30,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            width: 360,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text
                style={styles.head}
                onPress={() => {
                  setprogressJobs(true);
                }}
              >
                Waiting
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Avatar
                  rounded
                  source={{
                    uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                  }}
                  size={50}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      display: "flex",
                      color: "black",
                      padding: 3,
                    }}
                  >
                    User Name
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      display: "flex",
                      color: "black",
                      padding: 3,
                    }}
                  >
                    Center Street
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon name="credit-card" color="#BEBEBE" size={14} />
              <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                Cash
              </Text>
              <View
                style={{
                  marginLeft: 15,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialIcon name="group" color="#BEBEBE" size={14} />
                <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                  2
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <TouchableOpacity style={styles.buttontext}>
              <Text style={styles.buttonTextstart}>End Stop Point</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttontext}
              onPress={() => {
                navigation.navigate('Livestreaming')
              }}
            >
              <Text style={styles.buttonTextstart}>Live Streaming</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <TouchableOpacity style={styles.buttontext} onPress={() => {
                setpanicModal(true);
              }}>
              <Text style={styles.buttonTextstart}>Panic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttontext}>
              <Text style={styles.buttonTextstart}>Base</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      </SafeAreaView>
  )
}

export default Showpanic

const styles = StyleSheet.create({
    head: {
      fontSize: 20,
      fontWeight: "800",
      display: "flex",
      color: "#F164b2",
      padding: 2,
    },
    topbar: {
      position: "absolute",
      top: 0,
      zIndex: 1000,
      display: "flex",
      backgroundColor: "#F164b2",
      width: "100%",
      height: 130,
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: "center",
    },
    button: {
      backgroundColor: "black",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 45,
      paddingRight: 45,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
      width: 150,
      marginRight: 10,
    },
    buttontext: {
      backgroundColor: "black",
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
      width: 150,
      marginRight: 10,
    },
    buttonyes: {
      backgroundColor: "black",
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 10,
      paddingRight: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
      width: 120,
      marginRight: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 15,
      fontWeight: "500",
    },
    buttonTextstart: {
      color: "white",
      fontSize: 15,
      fontWeight: "500",
    },
    buttonTextyes: {
      color: "#F164b2",
      fontSize: 15,
      fontWeight: "500",
    },
  });