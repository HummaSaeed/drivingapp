import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native";
import AddProfile from "./src/AddProfile";
import AuthCode from "./src/AuthCode";
import BankDetail from "./src/BankDetail";
import CarDetails from "./src/CarDetails";
import DriverLicense from "./src/DriverLicense";
import LoginScreen from "./src/LoginScreen";
import PVG from "./src/PVG";
import SignUp from "./src/SignUp";
import Summary from "./src/Summary";
import TaxiLicense from "./src/TaxiLicense";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountCompletion from "./src/AccountCompletion";
import Dashboard from './src/Dashboard';
import Location from "./src/Location";
import LiveStreaming from "./src/LiveStreaming";
import LeftDrawerScreen from "./src/LeftDrawerScreen";
import PersonalJobs from "./src/PersonalJobs";
import ShiftDetail from "./src/ShiftDetail";
import FareDetail from "./src/FareDetail";
import RatePassenger from "./src/RatePassenger";
import ThankuFeedback from "./src/ThankuFeedback";
import CreateProfile from "./src/CreateProfile";
import ChangePassword from "./src/ChangePassword";
import VerificationCode from "./src/VerificationCode";
import PreviousTrips from "./src/PreviousTrips";
import CardDetail from "./src/CardDetail";
import ChooseTheme from "./src/ChooseTheme";
import Settings from "./src/Settings";
import RightDrawerScreen from "./src/RightDrawerScreen";
import Showpanic from "./src/showpanic";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AuthCode" component={AuthCode} options={{ headerShown: false }}/>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddProfile" component={AddProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="DriverLicense" component={DriverLicense} options={{ headerShown: false }}/>
        <Stack.Screen name="TaxiLicense" component={TaxiLicense} options={{ headerShown: false }}/>
        <Stack.Screen name="PVG" component={PVG} options={{ headerShown: false }}/>
        <Stack.Screen name="CarDetails" component={CarDetails} options={{ headerShown: false }} />
        <Stack.Screen name="BankDetail" component={BankDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Summary" component={Summary} options={{ headerShown: false }}/>
        <Stack.Screen name="AccountCompletion" component={AccountCompletion} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        <Stack.Screen name="Location" component={Location} options={{ headerShown: false }}/>
        <Stack.Screen name="Livestreaming" component={LiveStreaming} options={{ headerShown: false,presentation:'modal' }}/>
        <Stack.Screen name="RightDrawerScreen" component={RightDrawerScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LeftDrawerScreen" component={LeftDrawerScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="PersonalJobs" component={PersonalJobs} options={{ headerShown: false }}/>
        <Stack.Screen name="ShiftDetail" component={ShiftDetail} options={{ headerShown: false }}/> 
        <Stack.Screen name="RatePassenger" component={RatePassenger} options={{ headerShown: false }}/>
        <Stack.Screen name="ThankuFeedback" component={ThankuFeedback} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateProfile" component={CreateProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }}/>
        <Stack.Screen name="VerificationCode" component={VerificationCode} options={{ headerShown: false }}/>
        <Stack.Screen name="PreviousTrips" component={PreviousTrips} options={{ headerShown: false }}/>
        <Stack.Screen name="CardDetail" component={CardDetail} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="ChooseTheme" component={ChooseTheme} options={{ headerShown: false }}/>
        <Stack.Screen name="Showpanic" component={Showpanic} options={{ headerShown: false }}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
