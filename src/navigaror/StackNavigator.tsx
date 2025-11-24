import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import SplashScreen from '../screens/splash/SplashScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import HotelBookingPage from '../screens/app/searchscreencomponents/pages/HotelBooking/HotelBookingPage';
import SearchPageNavigator from './SearchPageNavigator';
import ProfilePageNavigator from './ProfilePageNavigator';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="MainApp" component={BottomTabNavigator} />
      <Stack.Screen name="SearchPageNavigator" component={SearchPageNavigator} />
      <Stack.Screen name="ProfilePageNavigator" component={ProfilePageNavigator} />


    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})