import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PersonalinfoScreen from '../screens/app/profilecomponent/ProfileOptionScreen/PersonalinfoScreen'
import TravelersListScreen from '../screens/app/profilecomponent/ProfileOptionScreen/TravelersListScreen'
import GstInScreen from '../screens/app/profilecomponent/ProfileOptionScreen/GstInScreen'
import WalletScreen from '../screens/app/profilecomponent/ProfileOptionScreen/WalletScreen'
import TripsScreen from '../screens/app/profilecomponent/ProfileOptionScreen/TripsScreen'
import ReferScreen from '../screens/app/profilecomponent/ProfileOptionScreen/ReferScreen'
import AListScreen from '../screens/app/profilecomponent/ProfileOptionScreen/AListScreen'
import ScratchCardScreen from '../screens/app/profilecomponent/ProfileOptionScreen/ScratchCardScreen'
import HelpScreen from '../screens/app/profilecomponent/ProfileOptionScreen/HelpScreen'

const ProfilePageNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='PersonalinfoScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name='PersonalinfoScreen' component={PersonalinfoScreen}/>
      <Stack.Screen name='TravelersListScreen' component={TravelersListScreen}/>
      <Stack.Screen name='GstInScreen' component={GstInScreen}/>
      <Stack.Screen name='WalletScreen' component={WalletScreen}/>
      <Stack.Screen name='ReferScreen' component={ReferScreen}/>
      <Stack.Screen name='AListScreen' component={AListScreen}/>
      <Stack.Screen name='ScratchCardScreen' component={ScratchCardScreen}/>
      <Stack.Screen name='HelpScreen' component={HelpScreen}/>
    </Stack.Navigator>
  )
}

export default ProfilePageNavigator