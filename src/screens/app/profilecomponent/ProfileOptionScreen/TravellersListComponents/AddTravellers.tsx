import { KeyboardAvoidingView, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../../../../constant'
import { scale } from 'react-native-size-matters'
import { Spacer } from '../../../../../components/framework/boots'
import SmallButton from '../../../../../components/framework/boots/SmallButton'


const AddTravellers = ({ modalvisible, setModalVisible }) => {
  const [name, setName] = useState(false)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalvisible}
      onRequestClose={() => setModalVisible(false)}
    >
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={() => setModalVisible(false)}>
      
       </TouchableOpacity>
        <View style={styles.sheet}>
          <Spacer height={20}/>

          <Text style={styles.title}>Add traveller details</Text>

          <View style={styles.inputBox}>
            <TextInput
              keyboardType="text"
              style={styles.inpufild}
              placeholder='Name'
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput
              style={styles.inpufild}
              placeholder="Mobile number"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputBox}>
          <TextInput
            style={styles.inpufild}
            placeholder="Email"
            keyboardType="email-address"
          />
          </View>
          <Spacer height={20}/>
          <SmallButton hight={40} width={300} backgroundColor={Color.NAVY_BLUE} title='Save' fontSize={18}/>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default AddTravellers

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: Color.WHITE,
    height:scale(280),
    alignItems:'center',
    borderTopRightRadius:scale(20),
    borderTopLeftRadius:scale(20)
  },
  inputBox: {
      height: scale(40),
      width: scale(300),
      borderWidth: scale(1),
      marginTop: scale(18),
      borderColor: Color.NAVY_BLUE,
      justifyContent: 'center',
      borderRadius: scale(5),
      flexDirection: 'row',
      alignItems:'center'
  
    },
    inpufild: {
      fontSize: scale(15),
      fontWeight: 600,
      marginLeft: scale(5),
      justifyContent: 'center',
      height: scale(40),
      flex: 2,
      color: Color.BLACK
  
    },
    logo: {
      marginTop: scale(10),
      marginLeft: scale(10)
    },
    overlay:{
      flex:1,
      justifyContent:'flex-end',
      backgroundColor:'#rgba(0, 0, 1, 0.33)'
    },
    title:{
      fontSize:scale(18),
      fontWeight:700
    },
    prefix:{
      fontSize:scale(15),
      fontWeight:700,
      borderRightWidth:scale(1),
      borderColor:Color.BLACK,
      marginLeft:scale(5)
    }
})