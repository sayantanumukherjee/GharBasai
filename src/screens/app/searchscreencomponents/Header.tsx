import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, ImagesAll } from '../../../constant'
import { moderateScale, scale } from 'react-native-size-matters'
import SearchBox from './SearchBox/SearchBox'
import { Spacer } from '../../../components/framework/boots'
import SmallButton from '../../../components/framework/boots/SmallButton'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigator = useNavigation()
    const hotelbooking =()=>{
           navigator.navigate('Offers')
    }
    const tourbooking =()=>{
        navigator.navigate('Trips')
    }
  return (
    <ImageBackground
    source={ImagesAll.SEARCH_SRC_BACK_IMG}
    resizeMode='cover'
    style={styles.backgroundImage}
    >
        <View style={styles.Header}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.title}>Ghar Basai</Text>
            <Image style={styles.phoneLogo} source={ImagesAll.PHONE_LOGO} resizeMode='cover'/>
          </View>
            <Text style={styles.subTitle}>Book top-rated budget </Text>
            <Text style={styles.subTitle}>hotels in India</Text>

        </View>
        <Spacer height={15}/>
        <View style={{flexDirection:'row' ,justifyContent:'center'}}>
        
        <SmallButton hight={45} width={150} backgroundColor={Color.BTN_GREEN} title='Hotels Booking' fontSize={17} onPress={hotelbooking}/>
        <Spacer width={30}/>
        <SmallButton hight={45} width={150} backgroundColor={Color.BTN_GREEN} title='Tour Booking' fontSize={17} onPress={tourbooking}/>

        </View>
        <Spacer height={10}/>
        <View style={{alignItems:'center'}}>
        <SearchBox/>
       
           
        </View>


    </ImageBackground>
  )
}

export default Header

const styles = StyleSheet.create({
    backgroundImage:{
        height:moderateScale(540)
    },
    Header:{
        
        justifyContent:'center',
        marginTop:moderateScale(50),
        marginLeft :moderateScale(20),

    },
    title:{
        fontSize:scale(30),
        color:Color.WHITE,
        fontWeight:700
    },
    subTitle:{
        fontSize:scale(18),
        color:Color.WHITE,
        fontWeight:500
    },
    phoneLogo:{
        marginLeft:scale(120),
        
        height:scale(45),
        width:scale(45),
    }
})