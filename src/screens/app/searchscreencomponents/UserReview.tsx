import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { Color } from '../../../constant'
import { scale } from 'react-native-size-matters'
import testimonials from '../../../data/testimonials.json'
const Renderitem =({item})=>{
    const firstword = item.name.charAt(0).toUpperCase()
     return(
      <View style={styles.revieweBox}>
        <View style={{flex:1}}>
        <Text style={styles.message}>"{item.message}"</Text>
        </View>
        <View style={{flex:1 , flexDirection:'row',marginBottom:scale(10)}}>
        <View style={styles.profileImage}>
          <Text style={styles.profileText}>{firstword}</Text>

        </View>
        <View style={{paddingLeft:scale(11)}}>
        <Text style={styles.username}>{item.name}</Text>
        <Text>{item.hotel}</Text>
        <Text>in {item.place} in {item.date}</Text>

        </View>
        </View>
      </View>
     )
  }

const UserReview = () => {
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trusted by <Text style={{color:Color.BTN_GREEN}}>50,000+</Text> verified guests</Text>
      <FlatList
        data={testimonials}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><Renderitem item={item}/>}
      />
    </View>
  )
}

export default UserReview

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.ROSE_BACK,
        height:scale(250),
        marginVertical:scale(10)
    },
    headingText:{
      fontSize:scale(15),
      fontWeight:700,
      paddingTop:scale(10),
      paddingLeft:scale(10)
    },
    revieweBox:{
      margin:scale(20),
      backgroundColor:Color.WHITE,
      height:scale(160),
      width:scale(300),
      borderRadius:scale(10),
      flex:1
    },
    message:{
      fontSize:scale(14),
      textAlign:'center',
      paddingTop:scale(10),
      paddingHorizontal:scale(10),
      fontStyle:'italic',
      
    },
    profileImage:{
      height:scale(50),
      width:scale(50),
      backgroundColor:Color.TEXT_RED,
      borderRadius:scale(100),
      alignItems:'center',
      justifyContent:'center',
      marginLeft:scale(10),
      marginTop:scale(15),
      

    },
    profileText:{
      fontSize:scale(30),
      fontWeight:700,
      color:Color.WHITE 
    },
    username:{
      fontSize:scale(21),
      fontWeight:700,
      marginTop:scale(8)
    }
})