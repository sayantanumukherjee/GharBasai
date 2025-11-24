import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Spacer, Statusbar } from '../../components/framework/boots'
import { Color, ImagesAll } from '../../constant'
import { scale } from 'react-native-size-matters'
import UserDetails from './profilecomponent/UserDetails'
import ProfileOptionList from './profilecomponent/ProfileOptionList'
import Appratting from './searchscreencomponents/Appratting'
import WhatsAppToggle from './profilecomponent/WhatsAppToggle'

const Profile = () => {
  return (
    <View>
      <Statusbar hight={35} backgroundColor={Color.BTN_GREEN} />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <UserDetails />

        <ProfileOptionList />

        <Spacer height={20} />
        

        <Appratting />
        <WhatsAppToggle/>
          <Spacer height={20}/>
        <View style={styles.containerLogout}>
             <TouchableOpacity>
              <Text style={styles.logouttext}>LogOut</Text>
             </TouchableOpacity>
        </View>
        <Spacer height={70}/>
        
         
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

containerLogout:{
  alignItems:'center',
  justifyContent:'center',
},
logouttext:{
  fontSize:scale(15),
  fontWeight:700
}

})