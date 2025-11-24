import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { Color } from '../../../constant'

const SmallButton = ({title='',hight=moderateScale(0), width=moderateScale(0),backgroundColor={},fontSize=scale(0), onPress={}}) => {
  return (
    <TouchableOpacity style={[styles.button ,{height:hight ,width:width ,backgroundColor:backgroundColor}]} onPress={onPress}>
        <Text style={[styles.buttonTitle,{fontSize:fontSize}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SmallButton

const styles = StyleSheet.create({
    button:{
        borderRadius:scale(45),
        justifyContent:'center',
        alignItems:'center'
        
    },
    buttonTitle:{
        fontWeight:700,
        color:Color.WHITE

    }
})