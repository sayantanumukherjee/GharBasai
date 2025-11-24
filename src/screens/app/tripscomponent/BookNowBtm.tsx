import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { Color } from '../../../constant'

const BookNowBtm = () => {
    const navigator =useNavigation()
  return (
    <View
    style={styles.screen}
    >
      <View style={styles.buttonContainer}>
          <Text>You don't have any upcoming bookings</Text>
        
        <TouchableOpacity style={styles.button} onPress={()=>navigator.navigate('SearchScreen')}>
          <Text style={styles.btnText}>Book Now</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default BookNowBtm

const styles = StyleSheet.create({
    buttonContainer:{
      
      alignItems:'center',
      justifyContent:'center',
      flex:1
  },
  screen:{
    flex:1,
    backgroundColor:Color.GRAY
    
    
  },
  button:{
    backgroundColor:'#8f0adcff',
    height:scale(40),
    width:scale(200),
    marginTop:scale(10),
    borderRadius:scale(10),
    justifyContent:'center',
    alignItems:'center',
    shadowColor:Color.BLACK,
    elevation:5
  },
  btnText:{
    fontWeight:700,
    fontSize:scale(20),
    color:Color.WHITE

  }
})