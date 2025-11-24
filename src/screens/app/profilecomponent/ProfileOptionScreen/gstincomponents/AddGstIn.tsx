import { KeyboardAvoidingView, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Spacer } from '../../../../../components/framework/boots'
import SmallButton from '../../../../../components/framework/boots/SmallButton'
import { Color } from '../../../../../constant'
import { scale } from 'react-native-size-matters'

const AddGstIn = ({ modalvisible, setModalVisible }) => {
    const [gstin , setGstin]=useState(null)
    const [company,setCompany]=useState(null)
    const [companyAddress,setCompanyaddress]=useState(null)
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

          <Text style={styles.title}>Add GSTIN details</Text>

          <View style={styles.inputBox}>
            <TextInput
              keyboardType="text"
              style={styles.inpufild}
              placeholder='Name'
              value={gstin}
              onChangeText={setGstin}
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.inpufild}
              placeholder="Company Name"
              keyboardType="text"
              value={company}
              onChangeText={setCompany}
            />
          </View>
          <View style={styles.inputBox}>
          <TextInput
            style={styles.inpufild}
            placeholder="Company Address"
            keyboardType="text"
            value={companyAddress}
            onChangeText={setCompanyaddress}
          />
          </View>
          <Spacer height={20}/>
          <SmallButton hight={40} width={300} backgroundColor={Color.NAVY_BLUE} title='Save' fontSize={18}/>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default AddGstIn

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