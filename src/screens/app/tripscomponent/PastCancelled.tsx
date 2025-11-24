import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { scale } from 'react-native-size-matters'
import BookNowBtm from './BookNowBtm'

const PastCancelled = () => {
  const [bookinglist,setBookinglist]=useState(false)
  return (
    <View style={styles.container}>
        {!bookinglist ? <BookNowBtm/>:'hii'}

    </View>
    
  )
}

export default PastCancelled

const styles = StyleSheet.create({
  
      container:{
        flex:1
      }
})