import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './NavBar'
import { Color, ImagesAll } from '../../../../constant'
import { Spacer } from '../../../../components/framework/boots'
import { scale } from 'react-native-size-matters'

const ScratchCardScreen = () => {
  return (
    <View style={{backgroundColor:Color.WHITE , flex:1}}>
      <NavBar title='Scratch cards'/>
      <Spacer height={100}/>
      <View style={styles.body}>
        <Image source={ImagesAll.NO_SCRATCH_CARD} resizeMode='contain' style={styles.backImage}height={scale(200)} width={scale(200)}/>
        <Text style={styles.EmptyTravellerText}>Uh-oh You're missing surpriseop</Text>
        <Spacer height={300}/>
      </View>
    </View>
  )
}

export default ScratchCardScreen

const styles = StyleSheet.create({
  body:{
      alignItems:'center',
      backgroundColor:Color.WHITE
     },
     EmptyTravellerText:{
      fontSize:scale(16),
     }
})