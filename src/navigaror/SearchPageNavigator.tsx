import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HotelBookingPage from '../screens/app/searchscreencomponents/pages/HotelBooking/HotelBookingPage'

const SearchPageNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='HotelBookigPage' screenOptions={{headerShown:false}}>
      <Stack.Screen name="HotelBookigPage" component={HotelBookingPage} />

    </Stack.Navigator>
  )
}

export default SearchPageNavigator

const styles = StyleSheet.create({})