import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Color, ImagesAll } from '../../../../constant'
import { scale } from 'react-native-size-matters'
import { Spacer } from '../../../../components/framework/boots'
import SmallButton from '../../../../components/framework/boots/SmallButton'
import AddGstIn from './gstincomponents/AddGstIn'

const GstInScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)
  
  return (
    <View style={{ flex: 1 }}>
      <NavBar title='GST IN' />
      <ScrollView style={{ backgroundColor: Color.WHITE }}>

        <View style={styles.body}>
          <Image source={ImagesAll.GST_IN_BACK} resizeMode='contain' style={styles.backImage} height={scale(300)} width={scale(300)} />
          <Text style={styles.EmptyTravellerText}>No GSTIN added yet.</Text>
          <Spacer height={300} />
          <SmallButton hight={40} width={350} backgroundColor={Color.NAVY_BLUE} title="Add New GSTIN" fontSize={15} onPress={() => setModalVisible(true)} />
          {modalVisible && (
        <AddGstIn
          modalvisible={modalVisible}
          setModalVisible={setModalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}


        </View>
      </ScrollView>
    </View>
  )
}

export default GstInScreen

const styles = StyleSheet.create({
  body: {
    alignItems: 'center'
  },
  EmptyTravellerText: {
    fontSize: scale(16)
  }

})