import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Statusbar } from '../../../../components/framework/boots'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { scale } from 'react-native-size-matters'
import { Color } from '../../../../constant'
import NavBar from './NavBar'


const HelpScreen = () => {
    const navigator = useNavigation()
  
  return (
    <View>
      <NavBar title='Help & Support'/>
    </View>
  )
}

export default HelpScreen

const styles = StyleSheet.create({
   navBar:{
    backgroundColor:Color.SKY_BLUE,
    height:scale(40),
    flexDirection:'row',
    alignItems:'center',
  },
  baclicon:{
    marginLeft:scale(10),
  },
  header:{
    marginLeft:scale(10)
  },
  headerText:{
    fontSize:scale(15),
    fontWeight:700,
    color:Color.WHITE
  }
})