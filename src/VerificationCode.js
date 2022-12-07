import { StyleSheet, Text, View, TextInput} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "./components/BackButton";
import BlackButton from "./components/BlackButton";

const VerificationCode = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{display:'flex',flexDirection:'row'}}>
  <BackButton />
  <Text style={styles.title}>Verification Code</Text>
  </View>
  <Text style={styles.subtext}>Please enter the code provided by the Company you will be working with.</Text>
  
  <View style={{display:'flex',flexDirection:'row',marginBottom:50}}>
  <TextInput placeholder={""} style={styles.inputfield}/>
  <TextInput placeholder={""} style={styles.inputfield}/>
  <TextInput placeholder={""} style={styles.inputfield}/>
  <TextInput placeholder={""} style={styles.inputfield}/>
  </View>
  <BlackButton text={"Done"} onPress={()=>{navigation.navigate('PreviousTrips')}}/>
</SafeAreaView>
  )
}

export default VerificationCode

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        alignItems: "center",
        padding: 17,
        backgroundColor:'white',
        justifyContent:'center'
      },
      title: {
        fontSize: 26,
        fontWeight: "700",
        margin: 7,
        color: "black",
        marginLeft:20
      },
      subtext: {
          marginLeft:20,
          marginRight:20,
        fontSize: 13,
        color: "#F164b2",
        textAlign:'center',
        marginBottom: 10,
      },
      inputfield: {
        height: 45,
        margin:7,
        width:65,
        height:65,
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
})