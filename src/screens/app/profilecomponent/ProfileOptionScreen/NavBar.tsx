import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { scale } from 'react-native-size-matters'
import { Color } from '../../../../constant'
import { useNavigation } from '@react-navigation/native'
import { Statusbar } from '../../../../components/framework/boots'

const NavBar = ({title=""}) => {
      const navigator =useNavigation()
    
  return (
    <View>
          <Statusbar hight={35} backgroundColor={Color.SKY_BLUE} barStyle='dark-content' />
                <View style={styles.navBar}>
                  <TouchableOpacity onPress={() => { navigator.navigate('MainApp', { screen: 'Profile' }) }}>
                    <Ionicons name='chevron-back' size={scale(26)} style={styles.baclicon} />
                  </TouchableOpacity>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                  </View>
                </View>
        </View>
  )
}

export default NavBar

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
})