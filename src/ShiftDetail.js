import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BackButton from "./components/BackButton";
import CustomIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShiftDetail = () => {
  const [Earning, setEarning] = useState(true);
  const [Bides, setBides] = useState(false);
  const [Break, setBreak] = useState(false);
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: 20,
          width: "100%",
        }}
      >
        <BackButton />
        <Text style={styles.head}>Shift Details</Text>
        <View
          style={{
            backgroundColor: "white",
            zIndex: 1000,
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomIcon name={"bar-chart-2"} color={"#F164b2"} />
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        <View style={styles.whitebutton}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Today</Text>
          <Text style={{ fontWeight: "600", fontSize: 14 }}>
            Total Earnings
          </Text>
          <Text style={{ fontWeight: "800", fontSize: 22 }}>$ 00.00</Text>
        </View>
        <View style={styles.whitebutton}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Today</Text>
          <Text style={{ fontWeight: "600", fontSize: 14 }}>Total Rides</Text>
          <Text style={{ fontWeight: "800", fontSize: 22 }}>5</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 50,
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontWeight: "600" }}>shift Start Time</Text>
        <Text style={{ fontWeight: "600" }}>7:00AM</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 50,
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontWeight: "600" }}>shift End Time</Text>
        <Text style={{ fontWeight: "600" }}>4:00PM</Text>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 50 }}>
        <Text style={{ textAlign: "right" }}>Sort By</Text>
      </View>
      {Earning ? (
        <>
          <View
            style={{
              marginTop: 20,
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#e0e0eb",
                height: 70,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 130,
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 18 }}> Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                width: 130,
                backgroundColor: "#e0e0eb",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 18 }}>Bides</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                width: 130,
                backgroundColor: "#e0e0eb",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 18 }}>Break</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 1,
                width: 130,
                backgroundColor: "#d1d1e0",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "600" }}>
                {" "}
                Types of Break
              </Text>
            </View>
            <View
              style={{
                height: 70,
                alignItems: "center",
                marginRight: 1,
                justifyContent: "center",
                width: 130,
                backgroundColor: "#d1d1e0",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "600" }}>
                Start Time
              </Text>
            </View>
            <View
              style={{
                height: 70,
                alignItems: "center",
                marginRight: 1,
                justifyContent: "center",
                width: 130,
                backgroundColor: "#d1d1e0",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "600" }}>End Time</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 1,
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>Long</Text>
            </View>
            <View
              style={{
                height: 70,
                alignItems: "center",
                marginRight: 1,
                justifyContent: "center",
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>9:00</Text>
            </View>
            <View
              style={{
                height: 70,
                alignItems: "center",
                marginRight: 1,
                justifyContent: "center",
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>10:00</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 1,
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>Long</Text>
            </View>
            <View
              style={{
                height: 70,
                alignItems: "center",
                marginRight: 1,
                justifyContent: "center",
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>9:00</Text>
            </View>
            <View
              style={{
                height: 70,
                alignItems: "center",
                marginRight: 1,
                justifyContent: "center",
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>10:00</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 1,
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>Long</Text>
            </View>
            <View
              style={{
                height: 70,
                alignItems: "center",
                marginRight: 1,
                justifyContent: "center",
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>9:00</Text>
            </View>
            <View
              style={{
                height: 70,
                alignItems: "center",
                marginRight: 1,
                justifyContent: "center",
                width: 130,
                backgroundColor: "#E8E8E8",
              }}
            >
              <Text>10:00</Text>
            </View>
          </View>
        </>
      ) : (
        <View></View>
      )}
    </>
  );
};

export default ShiftDetail;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "800",
    display: "flex",
    textAlign: "center",
  },
  whitebutton: {
    height: 120,
    width: 110,
    borderRadius: 25,
    backgroundColor: "white",
    zIndex: 1000,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
  },
});
