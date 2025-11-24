import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Offers from '../screens/app/Offers'
import Feather from 'react-native-vector-icons/Feather'
import { Color, ImagesAll } from '../constant'
import { moderateScale } from 'react-native-size-matters'
import { TabActions } from '@react-navigation/native'
import Trips from '../screens/app/Trips'
import Profile from '../screens/app/Profile'
import SearchScreen from '../screens/app/SearchScreen'

const BottomTabNavigator = () => {
      const Tab = createBottomTabNavigator()
  
  return (
    <View style={styles.Nav}>
    <Tab.Navigator screenOptions={({ route }) => ({
      
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          
          borderTopWidth: 0.3,
          borderTopColor: '#ccc',
        },
        
        
        
        
      })}>
      <Tab.Screen name='SearchScreen' component={SearchScreen} 
        options={{ title: 'Search' , tabBarIcon:({focused})=>{return <Feather name="search" size={moderateScale(20)} color={focused ? Color.BTN_GREEN : Color.BLACK} /> }}}
        
      />
      <Tab.Screen name='Offers' component={Offers}
       options={{ title: 'Offers', tabBarIcon:({focused})=>{return<Image source={ImagesAll.OFFERS_ICON} style={{tintColor: focused ? Color.BTN_GREEN :Color.BLACK ,height:moderateScale(20), width:moderateScale(20)}} />} }}
      />

      <Tab.Screen name='Trips' component={Trips}
       options={{ title: 'Trips', tabBarIcon:({focused})=>{return<Image source={ImagesAll.TRIPS_ICON} style={{tintColor: focused ? Color.BTN_GREEN :Color.BLACK ,height:moderateScale(20), width:moderateScale(20)}} />} }}
      />

      <Tab.Screen name='Profile' component={Profile}
       options={{ title: 'Profile', tabBarIcon:({focused})=>{return<Image source={ImagesAll.PROFILE_ICON} style={{tintColor: focused ? Color.BTN_GREEN :Color.BLACK ,height:moderateScale(23), width:moderateScale(20)}} />} }}
      />

    </Tab.Navigator>
    </View>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  Nav:{
    flex:1,

  }
})