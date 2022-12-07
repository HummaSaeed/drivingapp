import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import BackButton from './components/BackButton';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Settings = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginHorizontal: 20,
      }}
    >
      <BackButton />
      <Text style={styles.title}>Settings</Text>
    </View>
    <View>
    <View style={{marginTop:30,paddingHorizontal:30}}>
        <Text style={{fontSize:14}}>Brightness</Text>
        <View style={{marginVertical:20,display:'flex',flexDirection:'row'}}> 
           <View>
        <MaterialCommunityIcons name="moon-waxing-crescent" color="#DCDCDC" size={20}/>
        </View>
        <Slider
          maximumValue={1}
          minimumValue={0}
          minimumTrackTintColor="#F164b2"
          maximumTrackTintColor="grey"
          thumbTintColor="white"
          step={0.1}
          width={170}
        />
        <FontAwesome name="gear" color={"gear"} size={23}/>
        <IonIcon name="md-checkbox-outline" size={23}/>
        <Text>Automatic</Text>
        </View>
    </View>
    <View style={{width:300,height:1,paddingHorizontal:30,backgroundColor:'grey',marginLeft:30}}>

    </View>
    </View>
    <View>
    <View style={{marginTop:30,paddingHorizontal:30}}>
        <Text style={{fontSize:14,marginVertical:10,fontWeight:'500'}} onPress={()=>{navigation.navigate('ChooseTheme')}}>Theme</Text>
        <Text style={{fontSize:12,marginVertical:10,fontWeight:'500'}}>Night</Text>
    </View>
    <View style={{width:300,height:1,paddingHorizontal:30,backgroundColor:'grey',marginLeft:30}}>

    </View>
    </View>
    <View>
    <View style={{marginTop:30,paddingHorizontal:30}}>
        <Text style={{fontSize:14,marginVertical:10,fontWeight:'500'}}>Font Size</Text>
        <Text style={{fontSize:12,marginVertical:10,fontWeight:'500'}}>A Normal</Text>
    </View>
    <View style={{width:300,height:1,paddingHorizontal:30,backgroundColor:'grey',marginLeft:30}}>
    </View>
    </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: "700",
        margin: 10,
        color: "black",
        marginLeft: 10,
      },
})