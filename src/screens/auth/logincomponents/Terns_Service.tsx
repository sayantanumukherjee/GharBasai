import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Color } from '../../../constant'

const Terns_Service = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        By proceeding, you agree to Ghar Basai’s{' '}
        <Text
          style={styles.link}
          
        >
           Privacy Policy
        </Text>{' '}
        and{' '}
        <Text
          style={styles.link}
          
        >
          Terms of Service
        </Text>
        .
      </Text>
    </View>
  )
}

export default Terns_Service

const styles = StyleSheet.create({
    container:{
        flex:0,
        alignItems:'center',
        
        

        

    },
    text:{
        textAlign:'center',
        fontSize:verticalScale(12),
        paddingHorizontal:scale(10),
        

        
    },
    link:{
        color:Color.TEXT_RED,
        fontWeight:500

    }
})