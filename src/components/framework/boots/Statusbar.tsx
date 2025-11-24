import { StyleSheet, Text, View ,StatusBar, Platform } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Statusbar = ({barStyle='' ,backgroundColor={}}) => {
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0
  return (
    
      <View style={{height:statusBarHeight , backgroundColor:backgroundColor }}
      
      
      >
      <StatusBar barStyle={barStyle} translucent backgroundColor="transparent"/>

      </View>


    
  )
}

export default Statusbar

const styles = StyleSheet.create({})