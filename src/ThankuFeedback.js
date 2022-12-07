import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomIcon from "react-native-vector-icons/Ionicons";
import BlackButton from "./components/BlackButton";

const ThankuFeedback = ({navigation}) => {
  return (
    <View style={{ display: "flex", backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          display: "flex",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text style={styles.head}>Complete Ride</Text>
        <View
          style={{
            height: "70%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomIcon
            name="ios-checkmark-circle-outline"
            size={80}
            color="#F164b2"
          />
          <Text style={styles.head}>Thankyou for your feedback</Text>
        </View>
        <BlackButton text="Go to HomePage" onPress={()=>{navigation.navigate('CreateProfile')}}/>
      </View>
      
    </View>
  );
};

export default ThankuFeedback;

const styles = StyleSheet.create({
  head: {
    fontSize: 22,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
  },
});
