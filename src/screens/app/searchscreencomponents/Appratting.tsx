import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, ImagesAll } from '../../../constant'
import { scale } from 'react-native-size-matters'
import SmallButton from '../../../components/framework/boots/SmallButton'
import { Spacer } from '../../../components/framework/boots'

const Appratting = () => {
  return (
    <View style={styles.container}>
        <View style={styles.subcontainer}>
      <Text style={styles.title}>Love using our app?</Text>
      <Text style={styles.subtitle}>Rate us on Play Store</Text>
      <Spacer height={13}/>
      <SmallButton hight={35} width={70} backgroundColor={Color.BTN_GREEN} title='Rate Now' fontSize={12.5}/>
      </View>

      <Image source={ImagesAll.SOCIAL_MEDIA_BACK} style={styles.socialmedia}/>
    </View>
  )
}

export default Appratting

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.LAVENDER_BLUE,
        height:scale(100),
        marginHorizontal:scale(18),
        marginBottom:scale(30),
        borderRadius:scale(10),
        flexDirection:'row',
        overflow:'hidden',
        flex:1
    },
    subcontainer:{
     paddingTop:scale(10),
     paddingLeft:scale(10), 
     flex:7,
     
    },
    title:{
        fontSize:scale(15),
        fontWeight:700
    },
    socialmedia:{
      height:scale(90),
      width:scale(160),
      resizeMode:'contain',
      marginTop:scale(5),
      flex:0
    },
    subtitle:{
        fontSize:scale(12),
        marginLeft:scale(1)
    }
})