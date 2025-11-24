import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,ScrollView } from 'react-native'
import React, { useState } from 'react'
import CountryFlag from 'react-native-country-flag'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Color } from '../../../constant'

const InputBox = ({phonenumber,setPhonenumber}) => {
    
    return (
        <KeyboardAvoidingView>
            <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.InputBox}>
            <CountryFlag isoCode='in' size={moderateScale(19)} style={styles.Flag} />
            <Text style={styles.CountryCode}>+91</Text>
            <TextInput keyboardType='phone-pad' style={styles.TextInput}  maxLength={10} value={phonenumber} onChangeText={setPhonenumber}>

            </TextInput>

        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default InputBox

const styles = StyleSheet.create({
    InputBox: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: Color.BTN_GREEN,
        margin: scale(10),
        borderRadius: 8
    },
    TextInput: {
        flex: 1,
        fontSize: moderateScale(19),
        fontWeight: 500
    },
    CountryCode: {
        fontSize: moderateScale(19),
        fontWeight: 500,
        marginRight: moderateScale(5)
    },
    Flag: {
        marginLeft: 10,
        marginRight: 5
    },
})