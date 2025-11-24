import { StyleSheet, Text, View ,FlatList, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { Color } from '../../../constant'
import hotels from '../../../data/hotels.json'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { Screen } from 'react-native-screens'


const RecommendadHotels = () => {
  const navigator=useNavigation()
  return (
    <View style={styles.container}>
      <FlatList
        data={hotels}
        horizontal
        keyExtractor={(item)=>item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity style={styles.HotelCart} onPress={()=>{navigator.navigate("SearchPageNavigator",{screen:'HotelBookigPage',params:{hotel:item}})}}>
                <Image source={{uri:item.images[0]}} style={styles.Images}/>
                <Text style={styles.HotelTitle}>{item.name}</Text>
                <Text style={styles.place}>{item.place}</Text>
                  
                <Text> Starts <FontAwesome name="rupee" size={12}/> {item.price} per night</Text>
                <View style={{flexDirection:'row'}}>
               <View style={styles.Ratting}>
                <Text style={styles.RattingText}>{item.rating}/5</Text>
               </View>
                <Text style={{paddingLeft:scale(10)}}>{item.ratingCount} reviews</Text>
                </View>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default RecommendadHotels

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        paddingTop:scale(10),
        paddingLeft:scale(10)
    },
    
    HotelCart:{
        justifyContent:'center',
        marginRight:scale(20),
        marginTop:scale(10)
    },
    Images:{
        height:scale(180),
        width:scale(240),
        borderRadius:scale(15)
    },
    HotelTitle:{
      fontSize:scale(14),
      fontWeight:700,
      paddingLeft:scale(5),
      marginTop:scale(4)


    },
    place:{
      paddingLeft:scale(5)
    },
    Ratting:{
      backgroundColor:Color.BTN_GREEN,
      width:scale(50),
      height:scale(20),
      borderRadius:scale(10),
      alignItems:'center',
      justifyContent:"center",
      marginLeft:scale(5)
    },
    RattingText:{
      color:Color.WHITE,
      fontSize:scale(13)
    }
})