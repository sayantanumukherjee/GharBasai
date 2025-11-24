import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { Color, ImagesAll } from '../../../constant'
import LinearGradient from 'react-native-linear-gradient'

const CartBox = () => {
  return (
    <LinearGradient style={styles.container} colors={['#00A545','#006229']}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}>
    
        
        <View style={styles.CartHead}>
            <Text style={styles.Cartheadtext}>Fabulous, or Free</Text>
            
        </View>
        <View style={styles.headercontainer}>
        <Text style={styles.title}>Great sleep. Refreshing showers.</Text>
        <Text style={styles.subtitle}>Hassle free stay, else we pay.<Text style={{fontSize:scale(12)}}>Know more.</Text> </Text>
        <Image source={ImagesAll.CARTFEATUR1} resizeMode='contain' style={styles.Image1}/>
        <Image source={ImagesAll.CARTFEATUR2} resizeMode='contain' style={styles.Image2}/>

        </View>
        
    
        </LinearGradient>

  )
}

export default CartBox

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#00A545',
        height:scale(220),
        margin:scale(10),
        borderRadius:scale(10),
        alignItems:'center',
        marginHorizontal:scale(20)
    },
    CartHead:{
        backgroundColor:Color.TEXT_RED,
        height:scale(30),
        width:scale(110),
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:scale(10),
        borderBottomRightRadius:scale(10)
    },
    Cartheadtext:{
        fontSize:scale(12),
        color:Color.WHITE,
        fontWeight:700
    },
    title:{
          fontSize:scale(17),
          color:Color.WHITE,
          fontWeight:700
    },
    headercontainer:{
        alignItems:'center'
    },
    subtitle:{
        fontSize:scale(13),
        fontWeight:400,
        color:Color.WHITE
    },
    Image1:{
        height:scale(50),
        width:scale(270),
        marginTop:scale(10)
    },
    Image2:{
        height:scale(50),
        width:scale(290),
        marginTop:scale(18)
    }
})