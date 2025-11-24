import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { Color } from '../../../constant'


const OtpButton = ({phonenumber}) => {
  const navigator =useNavigation()
      const handelInput =()=>{
        if(phonenumber.length === 10){
            navigator.navigate('OTP',{phonenumber})
            Toast.show({
              type:'success',
              text1:'OTP SEND YOUR PHONE NUMBER',
              text2:phonenumber
            })
        }
        else{
          Toast.show({
            type:'error',
            text1:"Enter 10 digit numbeer"
          })
        }
          }

  return (
    <View style={styles.OtpButton}>
               <TouchableOpacity style={styles.btnOtp} onPress={handelInput}>
                <Text style={styles.OtpButtonText}>Get Otp</Text>
               </TouchableOpacity>
            </View>
  )
}

export default OtpButton

const styles = StyleSheet.create({
    OtpButton:{
    flex:0,
    alignItems:'center',
    
    
    
    
    
  },
  btnOtp:{
    backgroundColor:Color.BTN_GREEN,
    height:moderateScale(47),
    width:moderateScale(360),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    
    
    
    
    

  },
  OtpButtonText:{
     fontWeight:700,
     color:Color.WHITE,
     fontSize:moderateScale(18)
  }
})