import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from 'react-native-vector-icons/Ionicons'
import BlackButton from './components/BlackButton';

const AccountCompletion = ({navigation}) => {
  return (
    <SafeAreaView style={{ height: "100%", width: "100%",backgroundColor:'white',alignItems:'center',justifyContent:'center' }}>
      <CustomIcon name="ios-checkmark-circle-outline" size={80} color="#F164b2"/>
      <Text style={styles.head}>Account Created</Text>
      <View style={{bottom:70,position:'absolute'}}>
          <BlackButton text={"Login"} onPress={()=>{navigation.navigate('RightDrawerScreen')}}/>
      </View>
    </SafeAreaView>
  )
}

export default AccountCompletion

const styles = StyleSheet.create({
    head: {
        fontSize: 20,
        fontWeight: "800",
        display: "flex",
      },
})