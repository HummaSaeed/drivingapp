import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";

const GreenButton = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
  )
}

export default GreenButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#bcf763',
        paddingTop:15,
        paddingBottom:15,
        // paddingLeft:50,
        // paddingRight:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        width:140,
        marginRight:40
    },
    buttonText:{
        color:'white',
        fontSize:15,
        fontWeight:'500'
     }
})