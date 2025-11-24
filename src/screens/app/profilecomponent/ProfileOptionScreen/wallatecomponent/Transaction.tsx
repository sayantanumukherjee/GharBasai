import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { Color } from '../../../../../constant'

const Transaction = () => {
  return (
    <View>
       <View style={styles.transactionPage}>
              <View style={styles.rowContainer}>
      
              <View style={styles.dateBox}>
                <Text>Oct</Text>
                <Text>19</Text>
                <Text>2025</Text>
              </View>
      
              <View style={styles.details}>
                <Text style={styles.detailTitle}>New User sign up</Text>
                <Text style={styles.detailSubtitle}>Expires Date</Text>
              </View>
      
              <View style={styles.amount}>
                 <Text style={{fontWeight:700 , color:Color.BTN_GREEN,fontSize:scale(15)}}>+1500</Text>
              </View>
              </View>
            </View>
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
    transactionPage:{
  backgroundColor:Color.WHITE,

 },
 dateBox:{
  backgroundColor:Color.GRAY,
  height:scale(50),
  width:scale(40),
  justifyContent:"center",
  alignItems:'center',
  borderRadius:scale(8),
  shadowColor:Color.BLACK,
  elevation:2,
  marginTop:scale(5),
  marginLeft:scale(10),
  marginBottom:scale(5),
  
 },
 rowContainer:{
  flexDirection:'row',

 },
 details:{
  flex:2,
  marginLeft:scale(30),
  marginTop:scale(10)
 },
 amount:{
  flex:1,
  marginTop:scale(10)
 },
 detailTitle:{
  fontSize:scale(14),
  fontWeight:700
 }
})