import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { scale } from 'react-native-size-matters'
import { Color, ImagesAll } from '../../../../../constant'
import { useNavigation } from '@react-navigation/native'
const FinalAmount = () => {
    const navigator = useNavigation()
    return (
        <View style={styles.header}>
            <ImageBackground
                source={ImagesAll.PROFILE_BACK_PNL}
                style={styles.imageBack}

            >
                <View style={styles.backBtn}>
                    <TouchableOpacity onPress={()=>{navigator.navigate('MainApp', { screen: 'Profile' })}}>
                    <Feather name="arrow-left" size={scale(25)} />
                    </TouchableOpacity>
                    <Text style={styles.headingText}>Your Wallet</Text>
                </View>



                <View style={styles.profileContener}>

                    <View style={{ flex: 1 }}>
                        <Image source={ImagesAll.RUPEES_BACK} resizeMode='contain' style={styles.rupeesBck} />
                    </View>
                    <View style={styles.row}>

                        <View style={styles.ballance}>
                            <View style={styles.moneyContainer}>
                                <FontAwesome name="rupee" size={scale(30)} style={styles.rupees} />
                                <Text style={styles.userName}>1500</Text>
                            </View>
                            <Text style={styles.PhoneNo}>Fab Credits</Text>


                        </View>

                    </View>



                </View>


            </ImageBackground>




        </View>
    )
}

export default FinalAmount

const styles = StyleSheet.create({
    header: {
        height: scale(240),
        backgroundColor: Color.WHITE

    },



    rupees: {
        marginTop: scale(6)
    },



    imageBack: {
        height: scale(150),

    },
    profileContener: {
        backgroundColor: Color.WHITE,
        marginHorizontal: scale(25),
        height: scale(120),
        marginTop: scale(16),
        borderRadius: scale(15),
        shadowColor: Color.BLACK,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    roundedImage: {
        backgroundColor: Color.LAVENDER_BLUE,
        height: scale(40),
        width: scale(40),
        marginTop: scale(8),
        marginLeft: scale(8),
        borderRadius: scale(50),
        justifyContent: 'center',
        alignItems: 'center'

    },
    profileImagePNG: {
        height: scale(20),
        width: scale(20)
    },
    ballance: {
        marginLeft: scale(10),
        justifyContent: 'center',
        alignItems: 'center',

    },
    userName: {
        fontSize: scale(30),
        fontWeight: 700,
        marginLeft: scale(2)

    },
    PhoneNo: {
        fontSize: scale(12)
    },
    joinDate: {
        fontSize: scale(10),
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },
    text: {
        marginLeft: scale(20),
        fontSize: scale(14),
        fontWeight: 700,

    },



    moneyContainer: {
        flexDirection: 'row',
        alignItems: "center",

    },
    headingText: {
        fontSize: scale(20),
        fontWeight: 700,
        color: Color.WHITE,
        marginLeft: scale(5)
    },
    backBtn: {
        flexDirection: 'row',
        marginLeft: scale(20),
        marginTop: scale(15),
        paddingTop: scale(50)

    },
    rupeesBck: {
        height: scale(90),
        width: scale(200),

    },
})