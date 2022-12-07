import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import BlackButton from "./components/BlackButton";
import Logo from '../assets/signIn.png';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width:'100%',
        backgroundColor:'white',
        height:'100%'
      }}
    >
      <Image source={Logo}/>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtext}>Login to continue</Text>
      <View style={styles.inputfield}>
        <TextInput placeholder={"Email"} />
      </View>
      <View style={styles.inputfield}>
        <TextInput placeholder={"Password"} />
      </View>
      <Text style={{ color: "black", fontSize: 14, textAlign: "right",marginLeft:180,marginTop:10,marginBottom:34 }}>
        Forget Password?
      </Text>
      <BlackButton text={"Login"} onPress={()=>{navigation.navigate('AuthCode')}}/>
      <Text style={{ color: "black", fontSize: 14, textAlign: "center",marginTop:12,fontWeight:'600' }}>
        Don't have an Account?
        <Text
          style={{ color: "#F164b2", fontSize: 14 }}
        >
          Create Account
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "800",
    margin: 7,
    color: "black",
    display:'flex'
  },
  subtext: {
    fontSize: 10,
    color: "#F164b2",
    marginBottom: 10,
  },
  inputfield: {
    height: 45,
    width:310,
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
});
