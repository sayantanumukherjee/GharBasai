import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Statusbar } from '../../../../components/framework/boots'
import { useNavigation } from '@react-navigation/native'
import { Color } from '../../../../constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { scale } from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'


import Dob from './PersonalinfoComponents/Dob'
import Gender from './PersonalinfoComponents/Gender'
import RelationshipStatus from './PersonalinfoComponents/RelationshipStatus'
import NavBar from './NavBar'





const PersonalinfoScreen = () => {
  const navigator = useNavigation()
  const [dob, setDob] = useState(new Date())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  return (
    <View>
      <NavBar title='Tell us more about you'/>
      <View style={styles.body}>
        <ScrollView style={styles.scrollBody}>
          

            <View style={styles.inputBox}>
              <Ionicons name='person' size={scale(17)} style={styles.logo} />
              <TextInput
                keyboardType="text"
                style={styles.inpufild}
                placeholder='Name'
                value={name}
                onChangeText={setName}
              />
            </View>


            <View style={styles.inputBox}>
              <Entypo name='email' size={scale(17)} style={styles.logo} />
              <TextInput
                keyboardType="email-address"
                style={styles.inpufild}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}

              />
            </View>

            <View style={styles.inputBox}>
              <FontAwesome5 name='birthday-cake' size={scale(17)} style={styles.logo} />

              <Dob dob={dob} setDob={setDob} />
            </View>

            <View style={styles.inputBox}>
              <Feather name='home' size={scale(17)} style={styles.logo} />
              <TextInput
                keyboardType="text"
                style={styles.inpufild}
                placeholder='City Of residence'
                value={city}
                onChangeText={setCity}

              />
            </View>

            <View style={styles.inputBox}>

              <Ionicons name='female' size={scale(17)} style={styles.logo}>
                <Ionicons name='male-outline' size={scale(17)} />
              </Ionicons>
              <Gender />
            </View>

            <View style={styles.inputBox}>
              <RelationshipStatus />
            </View>


            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>

            </View>

            
        </ScrollView>
      </View>
    </View>
  )
}

export default PersonalinfoScreen

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Color.SKY_BLUE,
    height: scale(60),
    flexDirection: 'row',
    alignItems: 'center',
  },
  baclicon: {
    marginLeft: scale(10),
    color: Color.NAVY_BLUE,
    height: scale(25),
    width: scale(25)
  },
  header: {
    marginLeft: scale(10)
  },
  headerText: {
    fontSize: scale(19),
    fontWeight: 700,
    color: Color.NAVY_BLUE,

  },
  scrollBody: {
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputBox: {
    height: scale(40),
    width: scale(300),
    borderWidth: scale(1),
    marginTop: scale(30),
    borderColor: Color.NAVY_BLUE,
    justifyContent: 'center',
    borderRadius: scale(5),
    flexDirection: 'row',
    flex: 1

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
buttonContainer:{
  marginTop:scale(100),
  justifyContent:'center',
  alignItems:'center',
  height:scale(150)
},
btn:{
  backgroundColor:Color.NAVY_BLUE,
  width:scale(300),
  height:scale(35),
  borderRadius:scale(15),
  justifyContent:'center',
  alignItems:'center',
  shadowColor:Color.BLACK,
  elevation:3,
  shadowOpacity:100
},
btnText:{
   fontSize:scale(15),
   fontWeight:700,
   color:Color.WHITE

}

})