import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color, ImagesAll } from '../../../constant';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const ProfileOptionList = () => {
    const gridData = [
  { id: 1, title: 'Personal Info', icon: ImagesAll.PERSONAL_INFO_LOGO },
  { id: 2, title: "Travelers' List", icon: ImagesAll.TRAVELER_LIST_LOGO },
  { id: 3, title: 'GSTIN', icon: ImagesAll.GST_IN_LOGO},
  { id: 4, title: 'Wallet', icon: ImagesAll.WALLET_LOGO },
  { id: 5, title: 'Trips', icon: ImagesAll.TRIPS_LOGO },
  { id: 6, title: 'Refer & Earn', icon: ImagesAll.REFER_LOGO },
  { id: 7, title: 'A-List', icon: ImagesAll.A_LIST},
  { id: 8, title: 'Scratch Cards', icon: ImagesAll.SCRATCH_CART_LOGO},
  { id: 9, title: 'Help & Support', icon: ImagesAll.HELP_SUPPORT},
];
const navigator = useNavigation()
const OptionAction =(id)=>{
  if(id==1){
    navigator.navigate("ProfilePageNavigator",{screen : 'PersonalinfoScreen'})
  }
  else if(id==2)
  {
    navigator.navigate("ProfilePageNavigator",{screen : 'TravelersListScreen'})

  }
  else if(id==3)
  {
    navigator.navigate("ProfilePageNavigator",{screen : 'GstInScreen'})

  }
  else if(id==4)
  {
    navigator.navigate("ProfilePageNavigator",{screen : 'WalletScreen'})

  }
  else if(id==5)
  {
    navigator.navigate("MainApp",{screen : 'Trips'})

  }
  else if(id==6)
  {
    navigator.navigate("ProfilePageNavigator",{screen : 'ReferScreen'})

  }
  else if(id==7)
  {
    navigator.navigate("ProfilePageNavigator",{screen : 'AListScreen'})

  }
  else if(id==8)
  {
    navigator.navigate("ProfilePageNavigator",{screen : 'ScratchCardScreen'})

  }
  else if(id==9)
  {
    navigator.navigate("ProfilePageNavigator",{screen : 'HelpScreen'})

  }
  
}
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={gridData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card} onPress={()=>{OptionAction(item.id)}}>
            <Image source={item.icon} style={styles.icon} resizeMode="contain" />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ProfileOptionList

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    
    },
    card:{
        height:scale(95),
        width:scale(95),
        justifyContent:'center',
        alignItems:'center',
        margin:scale(10),
        borderRadius:scale(8),
        backgroundColor:Color.WHITE,
        shadowColor:Color.BLACK,
        elevation:2,

        
        
        
    },
    icon:{
        width:scale(30),
        height:scale(30)
    },
    title:{
        fontSize:scale(12),
        paddingTop:scale(10),
        fontWeight:700
    }
})