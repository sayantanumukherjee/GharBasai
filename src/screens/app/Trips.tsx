import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Statusbar } from '../../components/framework/boots'
import { Color } from '../../constant'
import { scale } from 'react-native-size-matters'
import UpcomingOngoing from './tripscomponent/UpcomingOngoing'
import PastCancelled from './tripscomponent/PastCancelled'

const Trips = () => {
  const Tab= createMaterialTopTabNavigator()
  return (
    <View style={styles.screen}>
      <Statusbar hight={35} backgroundColor={Color.NAVY_BLUE}/>
    <Tab.Navigator screenOptions={{ swipeEnabled:true, 
        tabBarStyle:{backgroundColor:Color.NAVY_BLUE, height:scale(50)},
        tabBarIndicatorStyle:{backgroundColor:Color.WHITE},
        tabBarLabelStyle:{fontSize:scale(13),marginTop:scale(10),fontWeight:700 ,color:Color.WHITE}
    }}>
      <Tab.Screen name="UpcomingOngoing" component={UpcomingOngoing}/>
      <Tab.Screen name="PastCancelled" component={PastCancelled}/>
    </Tab.Navigator>
    </View>
    
  )
}

export default Trips

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
}) 