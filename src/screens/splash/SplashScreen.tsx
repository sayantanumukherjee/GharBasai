import { StyleSheet, Text, View ,Animated,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Color, ImagesAll } from '../../constant'

const SplashScreen = () => {
  const navigation = useNavigation()
  const[progress]=useState( new Animated.Value(0))
  useEffect(()=>{
    Animated.timing(progress,{toValue:1, duration:1000,useNativeDriver:false,}).start()

    const timer =setTimeout(() => {
      navigation.navigate('Login')
      
    }, 300)
    return () => clearTimeout(timer)
  },[])

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  })
  return (
    <View style={styles.container}>
      <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
      <Image
        source={ImagesAll.APP_LOGO} 
        style={styles.logo}
        resizeMode="contain"
      />
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={ImagesAll.SPLASH_LOADIN_LOGO} style={styles.LodinLogo} resizeMode="contain"/>
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
      </View>
      
      <Text style={styles.loadingText}>Loading exclusive deals</Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:Color.GRAY,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: moderateScale(350),
    width: scale(350),
    marginTop:moderateScale(100)
  },
  
  progressContainer: {
    
    width: moderateScale(200),
    height: moderateScale(5),
    backgroundColor: Color.WHITE,
    borderRadius: moderateScale(9),
    overflow: "hidden",
    marginTop: moderateScale(5),
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1E1E70",
  },
  loadingText: {
    
    fontSize: scale(20),
    color: "#000",
    marginTop: moderateScale(8),
    fontWeight:700
  },
  LodinLogo:{
    height:moderateScale(30),
    width:verticalScale(60)
  }
})