import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import BackButton from "./components/BackButton";
import cardmap from "../assets/cardmap.png";
import { Avatar } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-elements";

const CardDetail = () => {
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
      <Image source={cardmap} style={{ width: 360, height: 230 }} />
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 30,
          height: "100%",
        }}
      >
        <View style={styles.inputfield}>
          <TextInput placeholder={"Pickup location"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"2nd location"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"3rd location"} />
        </View>
        <View style={styles.inputfield}>
          <TextInput placeholder={"Destination"} />
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
            }}
          />
          <View style={{ width: "100%" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500" }}>User Name</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
                marginRight: 150,
                marginTop:20
              }}
            >
              <Text style={{ fontSize: 10 }}>Destination Name</Text>
              <AirbnbRating reviews={["", ""]} size={10} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
  inputfield: {
    height: 45,
    width: 310,
    backgroundColor: "#E8E8E8",
    borderWidth: 0,
    borderRadius: 5,
    zIndex: 1000,
    marginTop: 20,
    display: "flex",
    padding: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
});
