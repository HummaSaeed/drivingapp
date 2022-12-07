import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import BackButton from "./components/BackButton";
import BlackButton from "./components/BlackButton";

const ChangePassword = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <BackButton />
        <Text style={styles.title}>ChangePassword</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View style={styles.inputfield}>
          <Text style={{ color: "#C8C8C8" }}>Current Password</Text>
          <TextInput secureTextEntry={true} />
        </View>
      </View>
      <View style={{ alignItems: "center"}}>
        <View style={styles.inputfield}>
          <Text style={{ color: "#C8C8C8" }}>New Password</Text>
          <TextInput secureTextEntry={true} />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.inputfield}>
          <Text style={{ color: "#C8C8C8" }}>Retype Password</Text>
          <TextInput secureTextEntry={true} />
        </View>
      </View>
      <View style={{display:'flex',alignItems:'center'}}>
      <BlackButton text={"Save"} onPress={()=>{navigation.navigate('VerificationCode')}}/>
      </View>
    
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
  inputfield: {
    height: 65,
    width: 310,
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
});
