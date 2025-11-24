import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BookNowBtm from './BookNowBtm'

const UpcomingOngoing = () => {
 const [bookinglist,setBookinglist]=useState(false)
  return (
    <View style={styles.container}>
        {!bookinglist ? <BookNowBtm/>:'hii'}

    </View>
  )
}

export default UpcomingOngoing

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})