import { Animated, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Statusbar } from '../../../../components/framework/boots'
import { Color, ImagesAll } from '../../../../constant'
import { scale } from 'react-native-size-matters'
import FinalAmount from './wallatecomponent/FinalAmount'
import Transaction from './wallatecomponent/Transaction'




const WalletScreen = () => {
  return (
    <View style={styles.body}>
      <Statusbar backgroundColor={Color.SKY_BLUE} barStyle='light-content' />

      <FinalAmount/>
      <Transaction/>
     
    </View>
  )
}

export default WalletScreen

const styles = StyleSheet.create({
  
 
  
})