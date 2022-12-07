import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
const BackButton = () => {
  const navigation = useNavigation();
  return (
   <TouchableOpacity style={styles.button}  onPress={() => {navigation.goBack()}}>
       <CustomIcon name="chevron-left" color="#F164b2" size={30} height={30}/>
   </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        zIndex:1000,
        borderRadius:50,
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        border:0,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 2,
    }
})