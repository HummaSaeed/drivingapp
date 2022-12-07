import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {  createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LeftDrawerScreen from "./LeftDrawerScreen";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIconCommunity from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const RightDrawer = createDrawerNavigator();
function RightDrawerContent({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, padding: 0 }}>
    <View>
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F164b2",
          borderRadius: 10,
          marginTop: 5,
          marginLeft: 5,
        }}
      >
        <Text>x</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 30, marginLeft: 30 }}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 5 }}>
          John Doe
        </Text>
        <View
          style={{
            marginTop: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon name="star" color="#F164b2" />
          <Text style={{ fontSize: 12, fontWeight: "700" }}>(4.8)</Text>
        </View>
        <View style={{width:220,height:1,marginHorizontal:10,backgroundColor:'#D0D0D0',marginTop:50}}>

        </View>
      </View>
      </View>
      <DrawerContentScrollView>
      <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>
                Profile
              </Text>
            </View>
          )}
          onPress={()=>{navigation.navigate('CreateProfile')}}
          icon={() => <Feather name={"user-x"} color="black" size={20} />}
        />
         <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>
                Previous Trips
              </Text>
            </View>
          )}
          onPress={()=>{navigation.navigate('PreviousTrips')}}
          icon={() => <Entypo name={"back-in-time"} color="black" size={20} />}
        />
           <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>
                Total Earnings
              </Text>
            </View>
          )}
          onPress={()=>{navigation.navigate('ShiftDetail')}}
          icon={() => <FontAwesome5Icon name={"money-bill-wave"} color="black" size={20} />}
        />
          <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>
                Settings
              </Text>
            </View>
          )}
          onPress={()=>{navigation.navigate('Settings')}}
          icon={() => <FontAwesomeIcon name={"gear"} color="black" size={20} />}
        />
          <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>
                Share
              </Text>
            </View>
          )}
          icon={() => <FontAwesomeIcon name={"share-alt"} color="black" size={20} />}
        />
         <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>
                Log out
              </Text>
            </View>
          )}
          icon={() => <Feather name={"log-out"} color="black" size={20} />}
        />
      </DrawerContentScrollView>
    
    </SafeAreaView>
  );
}

const RightDrawerScreen = ({navigation}) => {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <RightDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <RightDrawer.Screen
        name="LeftDrawerScreen"
        component={LeftDrawerScreen}
      />
    </RightDrawer.Navigator>
  );
};

export default RightDrawerScreen;

const styles = StyleSheet.create({});
