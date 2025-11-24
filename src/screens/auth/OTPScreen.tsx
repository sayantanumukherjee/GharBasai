import {TextInput,TouchableOpacity,KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

import Feather from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Spacer } from '../../components/framework/boots'
import { Color } from '../../constant'
import OtpField from './otpcomponents/OtpField'


const OTPScreen = () => {
  const routs=useRoute()
  const {phonenumber}=routs.params
  const navigator = useNavigation()
  return (
    <SafeAreaView style={styles.body}>
      <Feather name="arrow-left" size={30} style={styles.BackBtn} onPress={()=>navigator.navigate('Login')}/>
      <Spacer height={20}/>
      
      <Text style={styles.TextHead}>Enter OTP</Text>

      <View style={styles.PhoneNumberContainer}>

      <Text style={styles.TextOtp}>OTP send to</Text>
      <Text style={styles.NumberOtp}>+91 {phonenumber}</Text>
      </View>
      <Spacer height={8}/>
      <Text style={styles.EditNum} onPress={navigator.goBack}>Edit number</Text>
      
      <OtpField/>


    </SafeAreaView>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
  body:{
    flex:1
  },
  TextHead:{
    fontSize:scale(26),
    fontWeight:700,
    marginLeft:moderateScale(20)
  },
  BackBtn:{
    marginTop:moderateScale(20),
    marginLeft:moderateScale(20)
  },
  PhoneNumberContainer:{
    flexDirection:'row',
    marginLeft:moderateScale(20)
  },
  TextOtp:{
    fontSize:moderateScale(17),
    marginRight:verticalScale(5)
  },
  NumberOtp:{
    fontSize:moderateScale(17),
    fontWeight:700
  },
  EditNum:{
    color:Color.TEXT_RED,
    fontSize:moderateScale(17),
    marginLeft:moderateScale(20)
  }
})