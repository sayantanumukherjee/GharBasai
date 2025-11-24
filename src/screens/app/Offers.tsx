import { StyleSheet, Text, View ,StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Statusbar } from '../../components/framework/boots'
import { Color } from '../../constant'
import { moderateScale, scale } from 'react-native-size-matters'
import OffersCart from './offerscomponents/OffersCart'

const Offers = () => {
  return (
    <View >
      <Statusbar backgroundColor={Color.BTN_GREEN} barStyle='light-content' hight={35}/>
      <Text style={styles.titleHead}>Best deals for you</Text>
      <OffersCart horizontal={false} flexDirection='coloum'/>
      
    </View>
  )
}

export default Offers

const styles = StyleSheet.create({
  titleHead:{
            fontSize:scale(16),
            fontWeight:700,
            marginLeft:scale(10),
            marginTop:scale(10)
        },
        
})