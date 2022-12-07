import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/signIn.png";
import BlackButton from "./components/BlackButton";
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", height: "100%",backgroundColor:"white" }}
    >
      <Image source={Logo} />
      <Text style={styles.title}>Create Account</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.inputfields}>
          <TextInput placeholder={"First name"} />
        </View>
        <View style={styles.inputfields}>
          <TextInput placeholder={"SurName"} />
        </View>
      </View>
      <View style={styles.inputfield}>
          <TextInput placeholder={"Email"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Phone Number"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Password"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Confirm Password"} />
        </View>
        <View style={{marginTop:10}}>
        <BlackButton text={"Sign Up"} onPress={()=>{navigation.navigate('AddProfile')}}/>
        </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "800",
    margin: 7,
    color: "black",
    display: "flex",
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
  inputfields: {
    height: 55,
    width: 150,
    backgroundColor: "white",
    marginRight:10,
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
});
