import { TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

import Feather from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Spacer } from '../../components/framework/boots'
import { Color } from '../../constant'
import OtpField from './otpcomponents/OtpField'
import { API } from '../../api/Api'
import { Screen } from 'react-native-screens'
import { useDispatch } from 'react-redux'
import { setUsers } from "../../redux/UserSlice"



const OTPScreen = () => {
  const routs = useRoute()
  const { phonenumber } = routs.params
  const navigator = useNavigation()

  const [user, setUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    API.get("/all-user")
      .then(res => setUser(res.data.data))
      .catch(err => console.log("API ERROR", err));
  }, [])
  const handleOtp = () => {
    if (!user) {
      Alert.alert("Error", "User data not loaded yet");
      return;
    }

    const match = user.find(u => u.contact_number == phonenumber)

    if (match) {
      dispatch(setUsers(match))
      navigator.navigate("MainApp", {
        Screen: "SearchScreen",

      })
      
    } else {
      Alert.alert("Invalid Number", "No user registered with this number");
    }
  }



  return (
    <SafeAreaView style={styles.body}>
      <Feather name="arrow-left" size={30} style={styles.BackBtn} onPress={() => navigator.navigate('Login')} />
      <Spacer height={20} />

      <Text style={styles.TextHead}>Enter OTP</Text>

      <View style={styles.PhoneNumberContainer}>

        <Text style={styles.TextOtp}>OTP send to</Text>
        <Text style={styles.NumberOtp}>+91 {phonenumber}</Text>
      </View>
      <Spacer height={8} />
      <Text style={styles.EditNum} onPress={navigator.goBack}>Edit number</Text>

      <OtpField handleOtp={handleOtp} />


    </SafeAreaView>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  TextHead: {
    fontSize: scale(26),
    fontWeight: 700,
    marginLeft: moderateScale(20)
  },
  BackBtn: {
    marginTop: moderateScale(20),
    marginLeft: moderateScale(20)
  },
  PhoneNumberContainer: {
    flexDirection: 'row',
    marginLeft: moderateScale(20)
  },
  TextOtp: {
    fontSize: moderateScale(17),
    marginRight: verticalScale(5)
  },
  NumberOtp: {
    fontSize: moderateScale(17),
    fontWeight: 700
  },
  EditNum: {
    color: Color.TEXT_RED,
    fontSize: moderateScale(17),
    marginLeft: moderateScale(20)
  }
})