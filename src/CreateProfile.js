import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import BackButton from "./components/BackButton";
import BlackButton from "./components/BlackButton";

const CreateProfile = ({navigation}) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <BackButton />
        <Text style={styles.title}>Profile</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Avatar
          rounded
          size="large"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            marginTop: 5,
            fontWeight: "500",
          }}
        >
          Hi there John Doe!
        </Text>
      </View>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <View style={styles.inputfield}>
            <Text style={{ color: "#C8C8C8" }}>Name</Text>
            <TextInput />
          </View>
          <View style={styles.inputfield}>
            <Text style={{ color: "#C8C8C8" }}>Email</Text>
            <TextInput />
          </View>
          <View style={styles.inputfield}>
            <Text style={{ color: "#C8C8C8" }}>Mobile Number</Text>
            <TextInput />
          </View>
          <View style={styles.inputfield}>
            <Text style={{ color: "#C8C8C8" }}>Street</Text>
            <TextInput />
          </View>
          <View style={styles.inputfield}>
            <Text style={{ color: "#C8C8C8" }}>Password</Text>
            <TextInput />
          </View>
          <View style={{ marginTop: 15 }}>
            <BlackButton text={"Save"} onPress={()=>{navigation.navigate('ChangePassword')}}/>
          </View>
        </View>
      </View>
    </>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 10,
  },
  inputfield: {
    height: 65,
    width: 310,
    backgroundColor: "white",
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
