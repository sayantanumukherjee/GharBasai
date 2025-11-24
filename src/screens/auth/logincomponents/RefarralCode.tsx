import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const RefarralCode = () => {
  return (
     <View style={styles.RefarralCodeContainer}>
            <TouchableOpacity>
              <Text style={styles.RefarralCode}>Have a referral code?</Text>
            </TouchableOpacity>
            </View>
  )
}

export default RefarralCode

const styles = StyleSheet.create({
    RefarralCode:{
        color:"#282561",
        fontSize:moderateScale(16),
        marginLeft:moderateScale(19),
        marginTop:moderateScale(19),
        flex:0
      },
      RefarralCodeContainer:{
        flex:0,
        flexDirection:"row",
       
        

        
      },
})