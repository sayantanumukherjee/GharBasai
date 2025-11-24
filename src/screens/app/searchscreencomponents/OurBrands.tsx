import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity ,Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import brands from '../../../data/brands.json'
import { Color, ImagesAll } from '../../../constant'

const { width } = Dimensions.get('window')
const OurBrands = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const listref = useRef(null)

  const handelScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width)
    setActiveIndex(slideIndex)
  }

  const handelButtonpress = (index) => {
    setActiveIndex(index)
    if (listref.current) {
      listref.current?.scrollToIndex({ index, animated: true })
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titlehead}>Our Brands</Text>
      <View>
      <FlatList
        data={brands}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View >
            <TouchableOpacity onPress={() =>handelButtonpress(index)}
              style={[styles.button, { backgroundColor: activeIndex === index ? Color.BTN_GREEN : Color.NAVY_BLUE }]}
            >
              <Text style={styles.btnText}>{item.name}</Text>
            </TouchableOpacity>



          </View>



        )}

      />
</View>

<View>
      <FlatList
      ref={listref}
      data={brands}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item)=>item.id.toString()}
      onScroll={handelScroll}
      renderItem={({item})=>(
        <View style={styles.Cart}>
          <Image source={{uri:item.image}} style={styles.image}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.boldTitle}>{item.name}</Text>

          <View style={{flexDirection:'row', marginTop:scale(10),marginLeft:scale(20)}}>
          <Image source={ImagesAll.LIST_ICON} resizeMode='contain' style={styles.logo}/>
          <Text style={styles.desc}>{item.desc1}</Text> 
          </View>

          <View style={{flexDirection:'row', marginTop:scale(10),marginLeft:scale(20)}}>
          <Image source={ImagesAll.LIST_ICON} resizeMode='contain' style={styles.logo}/>
          <Text style={styles.desc}>{item.desc2}</Text> 
          </View>

          <View style={{flexDirection:'row', marginTop:scale(10),marginLeft:scale(20)}}>
          <Image source={ImagesAll.LIST_ICON} resizeMode='contain' style={styles.logo}/>
          <Text style={styles.desc}>{item.desc3}</Text> 
          </View>

        </View>

      )}
      
      />
      </View>

    </View>
  )
}

export default OurBrands

const styles = StyleSheet.create({
  container: {
    height: scale(450)
  },
  titlehead: {
    fontSize: moderateScale(20),
    fontWeight: 700,
    padding: scale(10)
  },
  buttoncontainer: {

  },
  button: {
    backgroundColor: Color.NAVY_BLUE,
    marginRight: scale(10),
    borderRadius: scale(15),
    padding: scale(5),
    marginLeft: scale(10)
  },
  btnText: {
    fontSize: scale(15),
    fontWeight: 500,
    color: Color.WHITE,
    paddingHorizontal: scale(5)

  },
  Cart:{
     marginRight:scale(10),
     
  },
  image:{
    height:scale(180),
    width:scale(250),
    marginRight:scale(20),
    marginTop:scale(20),
    marginLeft:scale(20),
    borderRadius:scale(15)
    
    

  },
  logo:{
    height:scale(20),
    width:scale(20),
    marginRight:scale(2)
  },
  title:{
    fontSize:scale(17),
    fontWeight:700,
    color:'#4a4949ff',
    marginTop:scale(10),
    marginLeft:scale(19)
  },
  boldTitle:{
      marginLeft:scale(20),
      fontSize:scale(21),
      fontWeight:700
  },
  desc:{
    fontSize:scale(15),
    textAlign:'center'
  }
})