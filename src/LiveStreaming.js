import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from './components/BackButton'

const LiveStreaming = () => {
  return (
    <View style={{padding:20}}>
        <BackButton/>
        <View style={{display:'flex',alignItems:'center',height:'100%',justifyContent:'center',paddingLeft:20,paddingRight:20}}>
            <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}}>Live streaming link has been sent to your selected contact</Text>
        </View>
      
    </View>
  )
}

export default LiveStreaming

const styles = StyleSheet.create({})