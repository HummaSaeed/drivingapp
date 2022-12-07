import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import BackButton from './components/BackButton'
import Card from './components/Card';

const PreviousTrips = ({navigation}) => {

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
      <Text style={styles.title}>Previous Trips</Text>
    </View>
    <View style={{paddingHorizontal:15}}>
    <Card onPress={()=>{navigation.navigate('CardDetail')}}/>
    <Card onPress={()=>{navigation.navigate('CardDetail')}}/>
    <Card onPress={()=>{navigation.navigate('CardDetail')}}/>
    </View>
    </View>
  )
}

export default PreviousTrips

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: "700",
        margin: 10,
        color: "black",
        marginLeft: 10,
      },
})