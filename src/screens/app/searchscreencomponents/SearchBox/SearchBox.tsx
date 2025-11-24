import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../../../../constant'
import { moderateScale, scale } from 'react-native-size-matters'
import CheckInOutBox from './CheckInOutBox'
import { Spacer } from '../../../../components/framework/boots'
import GuestsNo from './GuestsNo'

const SearchBox = () => {
  return (
    <ScrollView>
      <KeyboardAvoidingView>
    <View style={styles.SearchBox}>
      <Text style={styles.TextHead}>Where to?</Text>
      <TextInput
       style={styles.Input}
       placeholder='Search city, area or hotel'
      >

      </TextInput>

      
      
      <Spacer height={20}/>
       <CheckInOutBox/>
       <Spacer height={20}/>
       <GuestsNo/>
       <Spacer height={20}/>

       <View style={styles.OtpButton}>
                   <TouchableOpacity style={styles.btnOtp}>
                    <Text style={styles.OtpButtonText}>Search</Text>
                   </TouchableOpacity>
                </View>

    </View>

    
    </KeyboardAvoidingView>
    </ScrollView>

    
  )
}

export default SearchBox

const styles = StyleSheet.create({
    SearchBox:{
        backgroundColor:Color.WHITE,
        height:scale(280),
        width:scale(304),
        borderRadius:moderateScale(17),
        padding:moderateScale(13)
    },
    TextHead:{
        fontSize:moderateScale(13),

    },
    Input:{
        borderBottomWidth :scale(2),
        fontSize:scale(15),
        fontWeight:700,
        borderColor:Color.GRAY
    },
    OtpButton:{
    flex:0,
    alignItems:'center',
    
    
    
    
    
  },
  btnOtp:{
    backgroundColor:Color.BTN_GREEN,
    height:moderateScale(47),
    width:moderateScale(300),
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