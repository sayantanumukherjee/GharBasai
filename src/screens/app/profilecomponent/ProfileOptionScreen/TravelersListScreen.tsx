import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Color, ImagesAll } from '../../../../constant'
import { scale } from 'react-native-size-matters'
import { Spacer } from '../../../../components/framework/boots'
import SmallButton from '../../../../components/framework/boots/SmallButton'
import AddTravellers from './TravellersListComponents/AddTravellers'


const TravelersListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <ScrollView style={{backgroundColor:Color.WHITE}}>
      <NavBar title={'Travellers List'}/>
      <View style={styles.body}>
        <Image source={ImagesAll.TRAVELLER_BACK_IMG} resizeMode='contain' style={styles.backImage}height={scale(300)} width={scale(300)}/>
        <Text style={styles.EmptyTravellerText}>No traveller added yet.</Text>
        <Spacer height={300}/>
      <SmallButton hight={40} width={350} backgroundColor={Color.NAVY_BLUE} title="Add Traveller" fontSize={15} onPress={() => setModalVisible(true)}/>
      </View>
      {modalVisible && (
        <AddTravellers
          modalvisible={modalVisible}
          setModalVisible={setModalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
      
    </ScrollView>
  )
}

export default TravelersListScreen

const styles = StyleSheet.create({

   body:{
    alignItems:'center',
    backgroundColor:Color.WHITE
   },
   EmptyTravellerText:{
    fontSize:scale(16)
   }
})