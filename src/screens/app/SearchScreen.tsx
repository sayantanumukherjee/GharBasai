import { StyleSheet, Text, View ,ScrollView ,StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale } from 'react-native-size-matters'
import { Screen } from 'react-native-screens'
import Header from './searchscreencomponents/Header'
import { Color } from '../../constant'
import { Statusbar } from '../../components/framework/boots'
import PopularDestination from './searchscreencomponents/PopularDestination'
import RecommendadHotels from './searchscreencomponents/RecommendadHotels'
import OffersCart from './offerscomponents/OffersCart'
import CartBox from './searchscreencomponents/CartBox'
import UserReview from './searchscreencomponents/UserReview'
import OurBrands from './searchscreencomponents/OurBrands'
import Appratting from './searchscreencomponents/Appratting'

const SearchScreen = () => {
  return (
    

    
    <ScrollView showsVerticalScrollIndicator={false} style={styles.Container} stickyHeaderIndices={[0]}>
      <Statusbar backgroundColor={Color.SKY_BLUE} hight={35} barStyle='dark-content'/>
      
      <Header/>
      <PopularDestination/>
      <Text style={styles.title}>Book <Text style={styles.TextNumber}>1300+</Text> Ghar Basai across <Text style={styles.TextNumber}>50+</Text> cities</Text>

      <RecommendadHotels/>
      <Text style={styles.title}>Book Ghar Basai across <Text style={styles.TextNumber}>50+</Text> cities</Text>
      <RecommendadHotels/>
       <Text style={styles.titleHead}>Best deals for you</Text>
      
      <OffersCart horizontal={true} flexDirection='row'/>
      <CartBox/>
      <UserReview/>
      <OurBrands/>
      <Appratting/>
    </ScrollView>
    
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  Container:{
    flex:1,

  },
  title:{
          fontSize:scale(16),
          fontWeight:700,
          marginLeft:scale(10),
          marginTop:scale(10)
      },
      TextNumber:{
          color:Color.BTN_GREEN
      },
      titleHead:{
            fontSize:scale(16),
            fontWeight:700,
            marginLeft:scale(10),
            marginTop:scale(10)
        },
  
})