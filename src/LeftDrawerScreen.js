import { View, Text, Button } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React,{useState} from "react";
import Dashboard from "./Dashboard";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIconCommunity from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [showpanic, setshowpanic] = useState(true)
  return (
    <SafeAreaView style={{ flex: 1, padding: 0 }}>
      <View
        style={{
          top: 0,
          backgroundColor: "black",
          height: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Command Center</Text>
      </View>
      <DrawerContentScrollView>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "#585858", fontWeight: "600", fontSize: 16 }}>
                Home
              </Text>
            </View>
          )}
          icon={() => <FontAwesomeIcon name={"home"} color="black" size={20} />}
          
        />
        <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "#585858", fontWeight: "600", fontSize: 16 }}>
                Base
              </Text>
            </View>
          )}
          onPress={()=>{props.navigation.navigate('Showpanic')}}
          icon={() => (
            <FontAwesome5Icon
              name={"compress-arrows-alt"}
              color="black"
              size={20}
            />
          )}
        />
         <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "#585858", fontWeight: "600", fontSize: 16 }}>
                Panic
              </Text>
            </View>
          )}
          onPress={()=>{props.navigation.navigate('Showpanic')}}
          icon={() => (
            <MaterialIcon
              name={"rectangle-outline"}
              color="black"
              size={20}
            />
          )}
        />
           <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "#585858", fontWeight: "600", fontSize: 16 }}>
                Personal Jobs
              </Text>
            </View>
          )}
          onPress={()=>{props.navigation.navigate('PersonalJobs')}}
          icon={() => (
            <Foundation
              name={"shopping-bag"}
              color="black"
              size={20}
            />
          )}
        />
          <DrawerItem
          label={() => (
            <View>
              <Text style={{ color: "#585858", fontWeight: "600", fontSize: 16 }}>
                Break
              </Text>
            </View>
          )}
          icon={() => (
            <MaterialIconCommunity
              name={"free-breakfast"}
              color="black"
              size={20}
            />
          )}
        />
         <DrawerItem
         onPress={()=>{props.navigation.navigate('ShiftDetail')}}
          label={() => (
            <View>
              <Text style={{ color: "#585858", fontWeight: "600", fontSize: 16 }}>
                Shift Details
              </Text>
            </View>
          )}
          icon={() => (
            <MaterialIcon
              name={"dots-hexagon"}
              color="black"
              size={20}
            />
          )}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
const LeftDrawerScreen = ({navigation}) => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {},
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
      />
    </Drawer.Navigator>
  );
};

export default LeftDrawerScreen;
