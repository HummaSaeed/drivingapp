import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "./components/BackButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const ChooseTheme = () => {
  return (
    <View style={{ height: "100%"}}>
      <View style={{ paddingLeft: 50, marginTop: 30 }}>
        <BackButton />
      </View>
      <View style={{width:280,height:190,borderRadius:30,padding:10,zIndex:1000,backgroundColor:"#F8F8F8",marginLeft:30,marginTop:20}}>
          <Text style={styles.head}>
              Choose Theme
          </Text>
          <View style={{display:'flex',flexDirection:'row',marginLeft:50,marginTop:20}}>
              <MaterialCommunityIcons name="radiobox-marked" color="#F164b2" size={20}/>
              <Text style={{marginLeft:10,color:'#D0D0D0'}}>Night</Text>
          </View>
          <View style={{display:'flex',flexDirection:'row',marginLeft:50,marginTop:20}}>
              <MaterialCommunityIcons name="radiobox-blank" color="#D0D0D0" size={20}/>
              <Text style={{marginLeft:10,color:'#D0D0D0'}}>Morning</Text>
          </View>
      </View>
      <View style={{width:280,height:210,borderRadius:30,padding:10,zIndex:1000,backgroundColor:"#F8F8F8",marginLeft:30,marginTop:20}}>
          <Text style={styles.head}>
              Choose Font Size
          </Text>
          <View style={{display:'flex',flexDirection:'row',marginLeft:50,marginTop:20}}>
              <MaterialCommunityIcons name="radiobox-marked" color="#F164b2" size={20}/>
              <Text style={{marginLeft:10,color:'#D0D0D0'}}>Normal</Text>
          </View>
          <View style={{display:'flex',flexDirection:'row',marginLeft:50,marginTop:20}}>
              <MaterialCommunityIcons name="radiobox-blank" color="#D0D0D0" size={20}/>
              <Text style={{marginLeft:10,color:'#D0D0D0'}}>Small</Text>
          </View>
          <View style={{display:'flex',flexDirection:'row',marginLeft:50,marginTop:20}}>
              <MaterialCommunityIcons name="radiobox-blank" color="#D0D0D0" size={20}/>
              <Text style={{marginLeft:10,color:'#D0D0D0'}}>Large</Text>
          </View>
      </View>
    </View>
  );
};

export default ChooseTheme;

const styles = StyleSheet.create({
    head: {
        fontSize: 22,
        fontWeight: "800",
        display: "flex",
        textAlign: "center",
        marginTop:20
      },
});
