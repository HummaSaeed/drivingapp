import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import BackButton from "./components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "react-native-vector-icons/Feather";
import EmailIcon from "react-native-vector-icons/FontAwesome";
import BlackButton from './components/BlackButton';

const Summary = ({navigation}) => {
  return (
    <ScrollView>
    <SafeAreaView style={{ height: "100%", width: "100%",backgroundColor:'white' }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 7,
          marginBottom: 15,
          justifyContent: "center",
        }}
      >
        <BackButton />
        <Text style={styles.title}>Summary</Text>
      </View>
      <View style={{ marginTop: 8, marginLeft: 20 }}>
        <Text style={styles.head}>Info</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 8,
            marginBottom: 3,
          }}
        >
          <CustomIcon name="user-plus" color="#BEBEBE" />
          <Text style={styles.text}>First & Last Name</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 7,
            marginBottom: 3,
          }}
        >
          <EmailIcon name="envelope-o" color="#BEBEBE" />
          <Text style={styles.text}>Email Address</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 7,
            marginBottom: 3,
          }}
        >
          <EmailIcon name="phone" color="#BEBEBE" />
          <Text style={styles.text}>Phone Number</Text>
        </View>
      </View>
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Text style={styles.head}>Documents</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 7,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Photo.jpg</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 7,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Driving License.jpg</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 7,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Taxi License</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>PVG.jpg</Text>
        </View>
      </View>
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Text style={styles.head}>Car Details</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Make</Text>
          <Text style={styles.cardetails}>Honda</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Driving License.jpg</Text>
          <Text style={styles.cardetails}>Civic</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Taxi License</Text>
          <Text style={styles.cardetails}>JU 00000 000000</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Color</Text>
          <Text style={styles.cardetails}>Black</Text>
        </View>
        <View style={{ marginTop: 10, marginLeft: 10 }}>
        <Text style={styles.head}>Bank Details</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>First & Last Name</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Bank Name</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Bank Account Number</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          <Text style={styles.text}>Bank Name</Text>
        </View>
      </View>
      </View>
      <View style={{display:'flex',alignItems:'center'}}>
      <BlackButton text="Next" onPress={()=>{navigation.navigate('AccountCompletion')}}/>
      </View>
    </SafeAreaView>
   </ScrollView>
  );
};

export default Summary;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
    margin: 10,
    color: "black",
    marginLeft: 20,
  },
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
  },
  text: {
    fontSize: 14,
    color: "#BEBEBE",
    marginLeft: 10,
  },
  cardetails: {
    fontSize: 14,
    color: "#F164b2",
    marginLeft: 10,
  },
});
