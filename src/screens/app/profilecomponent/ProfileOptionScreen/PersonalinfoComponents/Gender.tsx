import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { scale } from 'react-native-size-matters'
import { Color } from '../../../../../constant'

const Gender = () => {
    const [selected, setSelected] = useState(null)
    const [visible, setVisible] = useState(false)
    const options = ['Male', 'Female']
    return (
        <View style={styles.body}>

            <TouchableOpacity

                onPress={() => setVisible(true)}
            >
                <Text style={styles.ImputText}>{selected ? selected : 'Gender'}</Text>
            </TouchableOpacity>

            <Modal
                visible={visible}
                animationType="slide"
                onRequestClose={() => setVisible(false)}
                transparent={true}
            >
                <View style={styles.ModalSlide}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => setVisible(false)}>

                    </TouchableOpacity>
                    <View style={styles.dropDownList}>
                     <Text style={styles.Header}>Select Gender</Text>
                        
                        <FlatList
                            data={options}
                            keyExtractor={(item, index) => index.toString()}

                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={styles.Option}
                                    onPress={() => {
                                        setSelected(item)
                                        setVisible(false)
                                    }}
                                >
                                    <Text style={styles.optionItem}>{item}</Text>
                                </TouchableOpacity>
                            )}

                        />
                    </View>

                </View>

            </Modal>
        </View>
    )
}

export default Gender

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        marginLeft: scale(10),


    },
    ImputText: {
        fontSize: scale(15),
        fontWeight: 500
    },
    ModalSlide: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end'
    },
    dropDownList:{
        backgroundColor:Color.WHITE,
        height:scale(150),
        borderTopRightRadius:scale(10),
        borderTopLeftRadius:scale(10)
    },
    optionItem:{
        fontSize:scale(20),
        fontWeight:700,
        marginLeft:scale(30),
        marginTop:scale(15),
        borderBottomWidth:1,
        borderColor:Color.GRAY,
        width:scale(280),
        paddingLeft:scale(10),
        paddingBottom:scale(8)
    },
    Header:{
        fontSize:scale(18),
        marginTop:scale(17),
        marginLeft:scale(10),
        color:Color.NAVY_BLUE
    }

})