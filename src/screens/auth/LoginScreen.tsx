import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Color, ImagesAll } from "../../constant";
import CountryFlag from 'react-native-country-flag';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Spacer } from '../../components/framework/boots';
import LineContainer from './logincomponents/LineContainer';
import InputBox from './logincomponents/InputBox';
import RefarralCode from './logincomponents/RefarralCode';
import OtpButton from './logincomponents/OtpButton';
import Terns_Service from './logincomponents/Terns_Service';

const LoginScreen = () => {
  
  const [phonenumber,setPhonenumber]=useState('')

  
    
  return (
    <View style={styles.LoginScreen}>
      <View style={styles.UperBackgound}>
        <Image source={ImagesAll.APP_LOGO} style={styles.AppLogo} />
      </View>
      <View style={styles.LowerBackground}>
        <LineContainer />
        
        <InputBox phonenumber={phonenumber} setPhonenumber={setPhonenumber} />
        
        <RefarralCode />
        <Spacer height={moderateScale(10)}/>
        <OtpButton phonenumber={phonenumber}/>
        
        <Terns_Service/>
        
        
        


      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,


  },
  UperBackgound: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Color.GRAY,
    borderBottomLeftRadius: 100,
    borderBottomEndRadius: 100,
    marginBottom: 20
  },
  LowerBackground: {
    flex: 2
  },
  AppLogo: {
    height: verticalScale(40),
    width: scale(130),
    marginTop: scale(40),
    flex: 1,
    

  },





})