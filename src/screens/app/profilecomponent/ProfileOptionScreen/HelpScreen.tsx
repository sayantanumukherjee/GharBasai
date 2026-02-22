import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Spacer, Statusbar } from '../../../../components/framework/boots'
import { useNavigation } from '@react-navigation/native'
import { scale } from 'react-native-size-matters'
import { Color } from '../../../../constant'
import NavBar from './NavBar'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'







const HelpScreen = () => {
  const navigator = useNavigation()

  return (
    <View style={{flex:1}}>
      <NavBar title='Help & Support'/>
      <View style={styles.body}>
        <View style={styles.options}>
          <TouchableOpacity style={styles.optionbtn}>
            <EvilIcons size={30} name="question" />
            <Spacer width={18} />
            <Text style={styles.btntitle}>FAQS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionbtn}>
            <FontAwesome size={22} name="file-text-o" style={styles.termslogo} />
            <Spacer width={18} />
            <Text style={styles.btntitle}>Terms & conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionbtn}>
            <EvilIcons size={30} name="lock" />
            <Spacer width={18} />
            <Text style={styles.btntitle}>Privacy policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionbtn}>
            <Spacer width={3} />

            <Ionicons size={25} name="book-outline" />
            <Spacer width={19} />
            <Text style={styles.btntitle}>Cancellation policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionbtn}>
            <Spacer width={5} />

            <Foundation size={30} name="page-delete" />
            <Spacer width={21} />
            <Text style={styles.btntitle}>Delete your account ?</Text>
          </TouchableOpacity>


        </View>
        <View style={styles.customersupport}>
          <Spacer height={20}/>

          <TouchableOpacity style={styles.callBtn}>
            <Text style={styles.btntitle}>Call customer care</Text>

          </TouchableOpacity>


        </View>

      </View>
    </View>
  )
}

export default HelpScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Color.GRAY

  },
  options: {
    backgroundColor: Color.WHITE,
    flex: 0
  },
  customersupport: {
    flex: 1,
    backgroundColor: Color.GRAY,
    alignItems:'center'
    
  },
  optionbtn: {
    height: scale(50),
    backgroundColor: Color.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(10),
    borderBottomWidth: scale(2),
    borderColor: Color.GRAY
  },
  btntitle: {
    fontSize: scale(14),
    fontWeight: 500
  },
  termslogo: {
    marginLeft: scale(5),
    marginRight: scale(5)
  },
  callBtn:{
    width:scale(300),
    height:scale(40),
    backgroundColor:Color.GRAY,
    borderWidth:scale(1),
    borderRadius:scale(20),
    justifyContent:'center',
    alignItems:'center'
    
  }
})