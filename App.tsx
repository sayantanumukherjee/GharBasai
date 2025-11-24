import { View, Text,StatusBar,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import StackNavigator from './src/navigaror/StackNavigator'


const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#eb0a0aff" }}>
       

        <StatusBar
          
          barStyle="dark-content"
        />

        <NavigationContainer>
          <StackNavigator/>
          <Toast/>
        </NavigationContainer>
        
      </View>
  )
}

export default App

const styles = StyleSheet.create({
  
});