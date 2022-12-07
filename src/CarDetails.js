import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from './components/BackButton';
import BlackButton from './components/BlackButton';
const CarDetails = ({navigation}) => {
  return (
    <SafeAreaView style={{ alignItems: "center", height: "100%",backgroundColor:'white' }}>
       <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <BackButton />
        <Text style={styles.title}>Car Details</Text>
      </View>
      <View style={{ paddingLeft: 75, paddingRight: 35 }}>
        <Text style={styles.subtext}>
          Please enter your car details
        </Text>
      </View>
      <View style={{marginTop:30}}>
      <View style={styles.inputfield}>
        <Text>Make</Text>
      </View>
      <View style={styles.inputfield}>
        <Text>Modal</Text>
      </View>
      <View style={styles.inputfield}>
        <Text>Registration</Text>
      </View>
      <View style={styles.inputfield}>
        <Text>Color</Text>
      </View>
      </View>
      <View style={{marginTop:220}}>
      <BlackButton text={"Next"} onPress={()=>{navigation.navigate('BankDetail')}}/>
      </View>
    </SafeAreaView>
  )
}

export default CarDetails

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
      inputfield: {
        height: 50,
        width:310,
        fontWeight:'600',
        backgroundColor: "white",
        borderWidth: 0,
        borderRadius: 5,
        zIndex: 1000,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        padding: 10,
        paddingLeft:20,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 2,
      },
})