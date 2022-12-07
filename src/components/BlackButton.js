import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";


const BlackButton = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default BlackButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:'black',
        paddingTop:18,
        paddingBottom:18,
        paddingLeft:67,
        paddingRight:67,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        width:310
    },
    buttonText:{
        color:'#F164b2',
        fontSize:15,
        fontWeight:'500'
     }
})