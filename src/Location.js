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

const Location = ({navigation}) => {
  const [progressJobs, setprogressJobs] = useState(false);
  const [pickup, setpickup] = useState(false);
  const [pickingUp, setpickingUp] = useState(false);
  const [waiting, setwaiting] = useState(false);
  const [inProgress, setinProgress] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [panicModal, setpanicModal] = useState(false);
  const [showwaitingModal, setshowwaitingModal] = useState(false);
  const [isCancel, setisCancel] = useState(false);
  console.log(navigation.params)
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Modal isVisible={showwaitingModal}>
        <View
          style={{
            backgroundColor: "white",
            width: 280,
            height: 220,
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Increase Waiting Time
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
            Time increase by 100min maximum
          </Text>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text
              style={{
                color: "black",
                fontSize: 36,
                textAlign: "center",
                marginTop: 0,
              }}
            >
              00.00
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row",padding:5,paddingLeft:15 }}>
            <TouchableOpacity style={styles.buttonyes} onPress={()=>{setshowwaitingModal(false);setinProgress(true)}}>
              <Text style={styles.buttonTextyes}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonyes}>
              <Text style={styles.buttonTextyes}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal isVisible={waiting}>
        <View
          style={{
            backgroundColor: "white",
            width: 280,
            height: 220,
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Increase Waiting Time
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
            Time increase by 100min maximum
          </Text>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text
              style={{
                color: "black",
                fontSize: 36,
                textAlign: "center",
                marginTop: 0,
              }}
            >
              00.00
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row",padding:5,paddingLeft:15 }}>
            <TouchableOpacity style={styles.buttonyes} onPress={()=>{setwaiting(false);setinProgress(true)}}>
              <Text style={styles.buttonTextyes}>Increase Time</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonyes} onPress={()=>{setisCancel(true)}}>
              <Text style={styles.buttonTextyes}>Cancel Job</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal isVisible={isCancel}>
        <View
          style={{
            backgroundColor: "white",
            width: 280,
            height: 220,
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Are you Sure you want to cancel the job?
          </Text>
          <View style={{ display: "flex", flexDirection: "row",padding:5,paddingLeft:15 }}>
            <TouchableOpacity style={styles.buttonyes} onPress={()=>{navigation.navigate('Livestreaming')}}>
              <Text style={styles.buttonTextyes}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonyes} onPress={()=>{setisCancel(false);setshowwaitingModal(false),setpanicModal(true)}}>
              <Text style={styles.buttonTextyes}>Cancel Job</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
     
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

      {progressJobs ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            height: 180,
            paddingTop: 30,
            paddingBottom: 10,
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
            <View style={{ width: "80%" }}>
              <Text
                style={styles.head}
                onPress={() => {
                  setprogressJobs(true);
                }}
              >
                Job In Progress
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  display: "flex",
                  color: "black",
                  padding: 3,
                }}
              >
                12 Thomas Street
              </Text>
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
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            <GreenButton
              text={"Start"}
              onPress={() => {
                setpickup(!pickup);
              }}
            />
          </View>
          {pickup ? (
            <>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  zIndex: 1000,
                  display: "flex",
                  backgroundColor: "white",
                  width: "100%",
                  height: 430,
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
                      Job In Progress
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        display: "flex",
                        color: "black",
                        padding: 3,
                      }}
                    >
                      12 Thomas Street
                    </Text>
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
                    <FontAwesomeIcon
                      name="credit-card"
                      color="#BEBEBE"
                      size={14}
                    />
                    <Text
                      style={{ color: "#BEBEBE", fontSize: 14, marginLeft: 5 }}
                    >
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
                      <Text
                        style={{
                          color: "#BEBEBE",
                          fontSize: 14,
                          marginLeft: 5,
                        }}
                      >
                        2
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Call</Text>
                  </TouchableOpacity>
                  <GreenButton
                    text={"Start"}
                    onPress={() => {
                      setpickup(false);
                      setprogressJobs(!progressJobs);
                      setpickingUp(!pickingUp);
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: "#F164b2",
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    Picking Up
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                  >
                    12 Thomas Street
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                  >
                    Haswell
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                  >
                    BOURNEMOUTH
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                  >
                    BHI 1AA
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      color: "#F164b2",
                      fontWeight: "500",
                      fontSize: 14,
                    }}
                  >
                    Destination
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                  >
                    12 Thomas Street
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                  >
                    Haswell
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                  >
                    BOURNEMOUTH
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 14 }}
                  >
                    BHI 1AA
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#BEBEBE",
                    width: 130,
                    marginTop: 10,
                    paddingLeft: -10,
                  }}
                >
                  Special Note for driver will display here
                </Text>
              </View>
            </>
          ) : (
            <View></View>
          )}
        </View>
      ) : (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            height: 120,
            paddingTop: 30,
            paddingBottom: 10,
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
            <View style={{ width: "80%" }}>
              <Text
                style={styles.head}
                onPress={() => {
                  setprogressJobs(true);
                }}
              >
                Job In Progress
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  display: "flex",
                  color: "black",
                  padding: 3,
                }}
              >
                12 Thomas Street
              </Text>
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
        </View>
      )}
      {pickingUp ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            height: 270,
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
                Job In Progress
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  display: "flex",
                  color: "black",
                  padding: 3,
                }}
              >
                12 Thomas Street
              </Text>
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
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#F164b2", fontWeight: "500", fontSize: 14 }}>
              Picking Up
            </Text>
            <Text style={{ color: "black", fontWeight: "500", fontSize: 15 }}>
              12 Thomas Street Haswall MOURNEMOUTH BHI 1AA
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            <GreenButton
              text={"Arrived"}
              onPress={() => {
                setpickup(false);
                setprogressJobs(!progressJobs);
                setpickingUp(!pickingUp);
                setwaiting(true);
              }}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}
      {waiting ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1000,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            height: 210,
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            <GreenButton
              text={"Start"}
              onPress={() => {
                setpickup(false);
                setprogressJobs(false);
                setpickingUp(false);
                setwaiting(false);
                setinProgress(false);
                setshowwaitingModal(true)
              }}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}
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
  );
};

export default Location;

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
