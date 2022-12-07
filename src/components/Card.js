import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { Avatar } from "react-native-elements";
import cardmap from '../../assets/cardmap.png'

const Card = ({navigation,onPress}) => {
  return (
    <TouchableOpacity style={{backgroundColor:'#F5F5F5',zIndex:2000,padding:20,paddingRight:70,borderRadius:20,marginTop:10}} onPress={onPress}>
      <Image source={cardmap} style={{width:290}} onPress={()=>{navigation.navigate('CardDetail')}}/>
      <View style={{paddingHorizontal:20,display:'flex',flexDirection:'row'}}>
      <Avatar
          rounded
          size="medium"
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
        />
        <View style={{width:'100%'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:10}}>User Name</Text>
            <Text style={{fontSize:10,fontWeight:'500'}}>$200</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:10}}>Destination Name</Text>
            <Text style={{fontSize:10,fontWeight:'500',color:'#F164b2'}}>credit card</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:10}}>01-July-2022</Text>
            <Text style={{fontSize:10,fontWeight:'500',color:'#F164b2'}}>1:10</Text>
        </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    
})