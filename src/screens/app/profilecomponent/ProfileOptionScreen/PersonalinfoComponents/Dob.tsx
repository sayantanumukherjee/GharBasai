import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { scale } from 'react-native-size-matters';

const Dob = ({dob, setDob}) => {
    const [showPicker, setShowPicker] = useState(null)

    const formatDate = (date) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    }
    return (
       <View style={{flex:1}}>
                    <TouchableOpacity
                      style={styles.dobBox}
                      onPress={() => setShowPicker('dob')}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.dateText}>
                        {`${formatDate(dob)}`}
                      </Text>
                    </TouchableOpacity>
        
                    {showPicker === 'dob' && (
                      <DateTimePicker
                        value={dob}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                          setShowPicker(null);
                          if (selectedDate) {
                            setDob(selectedDate)
                          }
                        }}
                      />
                    )}
                  </View>
    )
}

export default Dob

const styles = StyleSheet.create({
    dobBox: {
    flex: 1,
    justifyContent: 'center'
  },
  dateText: {
    fontSize: scale(15),
    marginLeft: scale(10)
  },
})