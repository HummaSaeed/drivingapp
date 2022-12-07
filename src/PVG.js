import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Ionicons";
import camera from '../assets/camera.png';
import gallery from '../assets/gallery.png';
import BlackButton from "./components/BlackButton";
import BackButton from "./components/BackButton";

const PVG = ({navigation}) => {
  return (
    <SafeAreaView style={{ alignItems: "center", height: "100%" }}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <BackButton />
        <Text style={styles.title}>PVG Certificate</Text>
      </View>
      <View style={{ paddingLeft: 75, paddingRight: 35 }}>
        <Text style={styles.subtext}>
          Please add images of your PVG Certificate
        </Text>
      </View>
      <View style={styles.view}>
        <TouchableOpacity>
          <CustomIcon name="ios-camera-outline" size={50} color="#E8E8E8" />
        </TouchableOpacity>
      </View>
      <View style={{marginTop:40}}>
      <BlackButton text="Next" onPress={()=>{navigation.navigate('CarDetails')}}/>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "black",
          height: 150,
          width: "100%",
          justifyContent:'center',
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: "white",fontSize:18,fontWeight:'500' }}>
            Profile Photo/Video
        </Text>
        <View style={{display:"flex",flexDirection:'row',marginTop:20}}>
          <TouchableOpacity >
            <Image source={gallery}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:15}}>
            <Image source={camera}/>
          </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default PVG

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: "700",
        margin: 10,
        color: "black",
        marginLeft: 20,
      },
      subtext: {
        fontSize: 14,
        color: "#F164b2",
        marginBottom: 10,
        margin: 1,
        textAlign: "center",
      },
      view: {
        marginTop: 60,
        width: 150,
        height: 180,
        borderWidth: 1,
        backgroundColor: "transparent",
        borderRadius: 15,
        borderColor: "#E8E8E8",
        alignItems: "center",
        justifyContent: "center",
      },
      backview: {
        marginTop: 20,
        width: 130,
        height: 130,
        borderWidth: 1,
        backgroundColor: "transparent",
        borderRadius: 15,
        borderColor: "#E8E8E8",
        alignItems: "center",
        justifyContent: "center",
      },
})