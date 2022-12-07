import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from './components/BackButton';
import BlackButton from './components/BlackButton';
const BankDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{ alignItems: "center", height: "100%",backgroundColor:'white' }}>
         <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <BackButton />
        <Text style={styles.title}>Bank Details</Text>
      </View>
      <View style={{ paddingLeft: 75, paddingRight: 35 }}>
        <Text style={styles.subtext}>
          Please enter your bank details
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.inputfields}>
          <TextInput placeholder={"First name"} />
        </View>
        <View style={styles.inputfields}>
          <TextInput placeholder={"SurName"} />
        </View>
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Bank Name"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Bank Account Number"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Sort Code"} />
        </View>
        <View style={{marginTop:80}}>
      <BlackButton text={"Next"} onPress={()=>{navigation.navigate('Summary')}}/>
      </View>
   </SafeAreaView>
  )
}

export default BankDetail

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
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
})