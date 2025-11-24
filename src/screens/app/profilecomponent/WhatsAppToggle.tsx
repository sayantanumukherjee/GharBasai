import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { Color, ImagesAll } from '../../../constant'
import { scale } from 'react-native-size-matters'
import { Spacer } from '../../../components/framework/boots'

const WhatsAppToggle = () => {
  return (
    <View style={styles.container}>
      <Image source={ImagesAll.WHATS_APP_LOGO} style={styles.logoStyle} resizeMode='contain'/>
      <Text>Get updates on WhatsApp</Text>
      <Spacer width={80}/>
      <Switch
       trackColor={{true:Color.BTN_GREEN , false:Color.GRAY}}
      />
    </View>
  )
}

export default WhatsAppToggle
const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.WHITE,
        height:scale(50),
        marginHorizontal:scale(20),
        shadowColor:Color.BLACK,
        elevation:2,
        borderRadius:scale(5),
        flexDirection:'row',
        alignItems:'center'

    },
    logoStyle:{
        height:scale(36),
        width:scale(36),
        marginHorizontal:scale(10)
    }
})