import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";

const OrangeButton = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
  )
}

export default OrangeButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#fa6990',
        paddingTop:15,
        paddingBottom:15,
        // paddingLeft:55,
        // paddingRight:55,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        width:140
    },
    buttonText:{
        color:'white',
        fontSize:15,
        fontWeight:'500'
     }
})