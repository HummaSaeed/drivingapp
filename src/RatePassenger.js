import { StyleSheet, Text, TextInput, View,TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import React from "react";
import { Rating, AirbnbRating } from 'react-native-elements';
import BlackButton from "./components/BlackButton";


const RatePassenger = ({navigation}) => {
    
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text style={styles.head}>RatePassenger</Text>
      <View style={{marginTop:50,alignItems:'center'}}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
        />
        <Text style={{fontSize:15,fontWeight:'500',marginTop:5}}>USER NAME</Text>
      </View>
      <View style={{marginTop:100,alignItems:'center'}}>
          <Text style={{fontSize:18}}>Rate the Ride</Text>
          <AirbnbRating  reviews={["", ""]} />
      </View>
      <View style={{marginTop:20,height:180,width:320,marginLeft:30,marginRight:30,borderRadius:15,borderColor:'grey',borderWidth:1,paddingHorizontal:10,paddingTop:14}}>
          <Text style={{color:'grey'}}>Show your views and comment about ride</Text>
      </View>
      <View style={{display:'flex',flexDirection:"row"}}>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('ThankuFeedback')}} >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Skip</Text>
    </TouchableOpacity>
         
      </View>
    </View>
  );
};

export default RatePassenger;

const styles = StyleSheet.create({
  head: {
    fontSize: 22,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
  },
  button:{
    backgroundColor:'black',
    paddingTop:18,
    paddingBottom:18,
    paddingLeft:47,
    paddingRight:47,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    width:150,
    marginRight:10,
    marginTop:10
},
buttonText:{
    color:'#F164b2',
    fontSize:15,
    fontWeight:'500'
 }
});
