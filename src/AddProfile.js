import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "./components/BackButton";
import CustomIcon from "react-native-vector-icons/Ionicons";
import BlackButton from "./components/BlackButton";
import camera from '../assets/camera.png';
import gallery from '../assets/gallery.png';
const AddProfile = ({navigation}) => {
  return (
    <SafeAreaView style={{ alignItems: "center", height: "100%",backgroundColor:'white' }}>
      <View style={{ display: "flex", flexDirection: "row",alignItems:'center' }}>
        <BackButton />
        <Text style={styles.title}>Add Photo/Video</Text>
      </View>
      <View style={styles.view}>
        <TouchableOpacity>
          <CustomIcon name="ios-camera-outline" size={50} color="#E8E8E8" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 55 }}>
        <BlackButton text="Next" onPress={()=>{navigation.navigate('DriverLicense')}} />
      </View>
      <View style={{ marginTop: 7 }}>
        <BlackButton text="Add More" />
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
  );
};

export default AddProfile;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 20,
  },
  view: {
    marginTop: 80,
    width: 160,
    height: 160,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderRadius: 7,
    borderColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
  },
});
