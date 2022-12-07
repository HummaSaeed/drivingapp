import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import redtoggle from "../assets/redtoggle.png";
import greentoggle from "../assets/greentoggle.png";
import BlackButton from "./components/BlackButton";
import GreenButton from "./components/GreenButton";
import OrangeButton from "./components/OrangeButton";

const Dashboard = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showGreen, setshowGreen] = useState(false);
  const [showCall, setshowCall] = useState(false);
 
  StatusBar.setHidden(true, "none");
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
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 30,
              marginTop: 50,
            }}
          >
            <FontAwesomeIcon name="circle-thin" color="grey" size={20} />
            <Text style={{ fontWeight: "500", marginLeft: 17, fontSize: 16 }}>
              Short Break
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 30,
              marginTop: 15,
            }}
          >
            <FontAwesomeIcon name="circle-thin" color="grey" size={20} />
            <Text style={{ fontWeight: "500", marginLeft: 17, fontSize: 16 }}>
              Long Break
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 30,
              marginTop: 15,
            }}
          >
            <FontAwesomeIcon name="circle-thin" color="grey" size={20} />
            <Text style={{ fontWeight: "500", marginLeft: 17, fontSize: 16 }}>
              End Shift
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 30,
              marginTop: 15,
            }}
          >
            <FontAwesomeIcon name="circle-thin" color="grey" size={20} />
            <Text style={{ fontWeight: "500", marginLeft: 17, fontSize: 16 }}>
              Recover
            </Text>
          </View>
          <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 30 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setIsModalVisible(!isModalVisible);
              }}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 30,
                height: 30,
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.openDrawer()}
            >
              <CustomIcon name="ellipsis-vertical" color="#F164b2" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{ paddingRight: 10 }}
              onPress={() => {
                setshowCall(true);
              }}
            >
              <FontAwesomeIcon name="phone" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 10 }}  onPress={() => {navigation.navigate('Location')}}>
              <FontAwesome5Icon name="walking" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <MaterialIcon name="chat-bubble" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <MaterialIcon name="chat-bubble" color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.getParent('RightDrawer').openDrawer()}>
              <FontAwesomeIcon name="circle" color="white" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View
            style={{
              backgroundColor: "black",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                fontWeight: "700",
                paddingTop: 12,
              }}
            >
              Miles
            </Text>
            <Text
              style={{
                fontWeight: "600",
                color: "white",
                fontSize: 12,
                paddingTop: 12,
              }}
            >
              Zone Name
            </Text>
            <View>
              <Feather name="clock" size={12} color="#F164b2" />
              <Text style={styles.text}>15</Text>
            </View>
            <View>
              <Feather name="clock" size={12} color="#F164b2" />
              <Text style={styles.text}>20</Text>
            </View>
            <View>
              <CustomIcon name="car" size={12} color="white" />
              <Text style={styles.text}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff5e6",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#ffe6ff",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff7e6",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#ffe6ff",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d5dcf0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#c1c7d9",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Text style={styles.tabletext}>Miles</Text>
            <Text style={styles.tabletext}>Zone Name</Text>
            <View>
              <Text style={styles.tabletext}>15</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
            <View>
              <Text style={styles.tabletext}>20</Text>
            </View>
          </View>
        </ScrollView>
        {!showGreen ? (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 1000,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "black",
              width: "100%",
              justifyContent: "space-between",
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={styles.head}
              onPress={() => setIsModalVisible(!isModalVisible)}
            >
              Start Shift
            </Text>
            <TouchableOpacity onPress={() => setshowGreen(true)}>
              <Image source={redtoggle} />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 1000,
              display: "flex",

              backgroundColor: "black",
              width: "100%",

              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.head}>Current Location</Text>
              <TouchableOpacity>
                <Image source={greentoggle} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.location}>Vessy location</Text>
              <TouchableOpacity style={{ marginRight: 10 }}>
                <MaterialIcon name="refresh" color="white" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        {showCall ? (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 1000,
              display: "flex",
              backgroundColor: "white",
              width: "100%",
              height: 170,
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 20,
              paddingRight: 20,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
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
              <View style={{width:"80%"}}>
                <Text style={styles.head}>Job Offer</Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    display: "flex",
                    color: "black",
                  }}
                >
                  12 Thomas Street
                </Text>
              </View>
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderWidth: 1,
                  borderColor: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 35,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "500" }}>20s</Text>
              </View>
            
           
            </View>
              <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
            <View style={{ display: "flex", flexDirection: "row",alignItems:'center' }}>
                <FontAwesomeIcon name="credit-card" color="#BEBEBE" size={14} />
                <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                  Cash
                </Text>
                <View style={{marginLeft:15,display: "flex", flexDirection: "row",alignItems:'center'}}>
                <MaterialIcon name="group" color="#BEBEBE" size={14} />
                <Text style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}>
                  2
                </Text>
                </View>
              </View>
              <Text style={{color:'black',fontSize:12,fontWeight:'500'}}>Time is accept</Text>
              </View>
              <View style={{display:'flex',flexDirection:"row",justifyContent:'center',marginTop:5}}>
                <GreenButton text={"Accept"}/>
                <OrangeButton text={"Decline"} />
              </View>
          </View>
        ) : null}
      </SafeAreaView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
    color: "#F164b2",
  },
  location: {
    fontSize: 14,
    fontWeight: "600",
    display: "flex",
    color: "white",
  },
  text: {
    fontWeight: "600",
    color: "white",
    fontSize: 12,
  },
  tabletext: {
    fontWeight: "600",
    color: "black",
    fontSize: 12,
  },
  button: {
    backgroundColor: "black",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 67,
    paddingRight: 67,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width: 262,
  },
  buttonText: {
    color: "#F164b2",
    fontSize: 15,
    fontWeight: "500",
  },
});
