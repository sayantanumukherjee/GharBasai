import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { moderateScale, scale } from 'react-native-size-matters';
import { Color } from '../../../../constant';


const CheckInOutBox = ({color={}}) => {
    const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date(new Date().setDate(new Date().getDate() + 3)))

  const [showPicker, setShowPicker] = useState(null)

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Check-in & Check-out</Text>

      <TouchableOpacity
        style={styles.box}
        onPress={() => setShowPicker('in')}
        activeOpacity={0.7}
      >
        <Text style={[styles.dateText,{color:color}]}>
          {`${formatDate(checkIn)} - ${formatDate(checkOut)}`}
        </Text>
      </TouchableOpacity>

      {showPicker === 'in' && (
        <DateTimePicker
          value={checkIn}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(null);
            if (selectedDate) {
              setCheckIn(selectedDate);
              setShowPicker('out');
            }
          }}
        />
      )}

      {showPicker === 'out' && (
        <DateTimePicker
          value={checkOut}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(null);
            if (selectedDate) setCheckOut(selectedDate);
          }}
        />
      )}
    </View>
  )
}

export default CheckInOutBox

const styles = StyleSheet.create({
    container:{
        borderBottomWidth :scale(2),
        borderColor:Color.GRAY

    },
    label:{
                fontSize:moderateScale(13),
        
    },
    box:{
        height:scale(30),
        
    },
    dateText:{
        fontSize:scale(15),
        fontWeight:700,
        marginTop:scale(2)
    }
})