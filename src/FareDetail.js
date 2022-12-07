import { View, Text, StyleSheet,Image,TouchableOpacity } from "react-native";
import React, {useState} from "react";
import Modal from "react-native-modal";
import BackButton from "./components/BackButton";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import card from '../assets/card.png';
import BlackButton from "./components/BlackButton";
import CustomIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import loading from '../assets/loading.png'

const FareDetail = () => {
    const [showModal, setshowModal] = useState(false);
    const [paymentconfirmed, setpaymentconfirmed] = useState(false);
  return (
    <>
     <Modal isVisible={showModal}>
        <View
          style={{
            backgroundColor: "white",
            width: 240,
            height: 240,
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
            onPress={()=>{setshowModal(false)}}
          >
            <Text style={{ color: "white" }}>x</Text>
          </TouchableOpacity>

         <Image source={loading}/>
          <Text style={{fontSize: 20,marginTop:20,fontWeight: "800",display: "flex",textAlign: "center",}}>Processing Payment</Text>
        </View>
      </Modal>
      <Modal isVisible={paymentconfirmed}>
        <View
          style={{
            backgroundColor: "white",
            width: 240,
            height: 210,
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
            onPress={()=>{setpaymentconfirmed(false)}}
          >
            <Text style={{ color: "white" }}>x</Text>
          </TouchableOpacity>

          <IonIcon
            name="ios-checkmark-circle-outline"
            size={80}
            color="#F164b2"
          />
          <Text style={{fontSize: 20,marginTop:20,fontWeight: "800",display: "flex",textAlign: "center"}}>Processing Payment</Text>
        </View>
      </Modal>
      <View style={{display:'flex',backgroundColor:'white'}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 30,
          width: "100%",
          paddingHorizontal:25
        }}
      >
        <BackButton />
        <Text style={styles.head}>Fare Details</Text>
      
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingHorizontal: 35,
          
          marginTop: 20,
          width:'100%',
          flexDirection:'row'
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "800" }}>Total</Text>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>$70.00</Text>
      </View>
      <View >
        <Text style={{ fontSize: 13,marginVertical:10,marginHorizontal:35,fontWeight:'500' }}>
          You have travelled 10miles in 20min
        </Text>
        
        </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingHorizontal: 55,
          marginTop: 10,
          width:'100%',
          flexDirection:'row'
        }}
      >
        <Text style={{ fontSize: 12,fontWeight:'700' }}>Base Fare</Text>
        <Text style={{ fontSize: 12,fontWeight:'700'  }}>$00.00</Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingHorizontal: 55,
          marginTop: 10,
          width:'100%',
          flexDirection:'row'
        }}
      >
        <Text style={{ fontSize: 12,fontWeight:'700' }}>Dimensions(0.80 x 10)</Text>
        <Text style={{ fontSize: 12,fontWeight:'700' }}>$3.00</Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingHorizontal: 55,
          marginTop: 10,
          width:'100%',
          flexDirection:'row'
        }}
      >
        <Text style={{ fontSize: 12,fontWeight:'700' }}>Time</Text>
        <Text style={{ fontSize: 12,fontWeight:'700' }}>$5.00</Text>
      </View>
      <View
        style={{
          height: 2,
          backgroundColor: "grey",
          width: 300,
          paddingHorizontal: 20,
          alignSelf:'center',
          marginTop:15
        }}
      ></View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingHorizontal: 50,
          marginTop: 10,
          width:'100%',
          flexDirection:'row'
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Total Payable</Text>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>$70.00</Text>
      </View>
      <View style={{marginTop:190}}>
        <Text style={{ fontSize: 15,marginVertical:10,marginHorizontal:35,fontWeight:'600' }}>
          Payment method selected
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop:10,
          paddingHorizontal:50
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <FontAwesome5Icon name="check-circle" color="#F164b2" />
          <Text style={{ fontSize: 13, fontWeight: "500",marginLeft:20 }}>Cash</Text>
        </View>
        <Image source={card}/>
      </View>
      <View style={{marginTop:50,alignItems:'center'}}>
          <BlackButton text={"Confirm Payment"} onPress={()=>{setpaymentconfirmed(true)}}/>
      </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  head: {
    fontSize: 22,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
    marginLeft:50
  },
});

export default FareDetail;
