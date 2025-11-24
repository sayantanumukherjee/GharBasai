import { StyleSheet, Text, View ,FlatList, TouchableOpacity ,Image } from 'react-native'
import React from 'react'
import destination from '../../../data/destination.json'
import { scale } from 'react-native-size-matters'
import { Color, ImagesAll } from '../../../constant'

const PopularDestination = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular destinations</Text>
      <FlatList
        data={destination}
        horizontal
        keyExtractor={(item)=>item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            
                <TouchableOpacity style={styles.item}>

                       { item.id==1?<Image source={ImagesAll.NEAR_YOU} style={styles.Image}/>:<Image source={{uri:item.image }} style={styles.Image}/>}
                    <Text style={styles.itemTitle}>{item.name}</Text>
                </TouchableOpacity>
            

        )}
      />
    </View>
  )
}

export default PopularDestination

const styles = StyleSheet.create({
    Image:{
        height:scale(40),
        width:scale(40),
        borderRadius:scale(100)
    },
    item:{
        alignItems:'center',
        marginRight:scale(15),
        
        marginTop:scale(10)
    },
    itemTitle:{
        color:Color.BLACK,
        fontWeight:400
    },
    title:{
        fontSize:scale(17),
        fontWeight:500
    },
    container:{
        paddingTop:scale(10),
        paddingLeft:scale(10)
    }
})