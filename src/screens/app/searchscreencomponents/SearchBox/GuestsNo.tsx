import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { Color } from '../../../../constant'

const GuestsNo = () => {
  const [selected, setSelected] = useState(null)
  const [visible, setVisible]=useState(false)
  const options = [1,2,3,4]
  return (
    <View style={styles.Container}>
      <Text style={styles.label}>Guests</Text>

      <TouchableOpacity
        style={styles.imputBox}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.ImputText}>{selected ? selected : 'Chouse No of'} Guest</Text>
      </TouchableOpacity>
      
        <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
        transparent={true}
        >

        <View style={styles.dropDown}>
          <TouchableOpacity style={{flex:1}} onPress={() => setVisible(false)}>
              
          </TouchableOpacity>
          <View style={styles.dropDownList}>
            
            <Text style={styles.modalHeding}>Guest</Text>
          <FlatList
            data={options}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.Option}
                onPress={() => {
                  setSelected(item)
                  setVisible(false)
                }}
              >
                <Text style={styles.optionItem}>{item} Guest</Text>
              </TouchableOpacity>
            )}

          />
          </View>
          
        </View>
        </Modal>

      
    </View>
  )
}

export default GuestsNo

const styles = StyleSheet.create({
  Container: {

  },
  label: {
    fontSize: moderateScale(13),

  },
  imputBox: {
    height: scale(30),
  },
  ImputText: {
    fontWeight: 700,
    fontSize: scale(15),
    paddingBottom: scale(5),
    borderBottomWidth: scale(2),
    borderColor: Color.GRAY

  },
  dropDown:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.4)',
    justifyContent:'flex-end'
  },
  dropDownList:{
    backgroundColor:Color.GRAY,
    justifyContent:'center',
    height:scale(150),
    borderTopRightRadius:scale(12),
    borderTopLeftRadius:scale(12)
  },
  modalHeding:{
    fontSize:moderateScale(20),
    fontWeight:700,
    borderBottomWidth:scale(1),
    borderColor:Color.BLACK,
    padding:scale(8),

    
  },
  Option:{
    paddingLeft:scale(15),

  },
  optionItem:{
    fontSize:moderateScale(15),
    fontWeight:500,
    padding:scale(2)
  }

})