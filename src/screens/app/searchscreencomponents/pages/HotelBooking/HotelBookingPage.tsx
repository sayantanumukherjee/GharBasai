import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { scale } from 'react-native-size-matters'
import { Spacer, Statusbar } from '../../../../../components/framework/boots'
import { Color } from '../../../../../constant'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CheckInOutBox from '../../SearchBox/CheckInOutBox'
import { SafeAreaView } from 'react-native-safe-area-context'
import GuestsNo from '../../SearchBox/GuestsNo'



const HotelBookingPage = () => {


    const [mobile, setMobile] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gstChecked, setGstChecked] = useState(false)



    const navigator = useNavigation()
    const { width } = Dimensions.get('window')
    const route = useRoute()
    const { hotel } = route.params
    const [currentIndex, setCurrentIndex] = useState(0)


    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    }


    return (
            <View style={{ flex: 1 }}>
                <Statusbar hight={35} backgroundColor={Color.SKY_BLUE} barStyle='dark-content' />
                <View style={styles.navBar}>
                    <TouchableOpacity onPress={() => { navigator.navigate('MainApp', { screen: 'SearchScreen' }) }}>
                        <Ionicons name='chevron-back' size={scale(26)} style={styles.baclicon} />
                    </TouchableOpacity>
                    <View style={styles.searchbox}>
                        <CheckInOutBox color={Color.WHITE} />
                    </View>
                    

                </View>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? scale(100) : scale(35)}
                >



                    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                        <View style={styles.fullContener}>


                            <View style={styles.imageContainer}>



                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={hotel.images}
                                    pagingEnabled
                                    onScroll={handleScroll}
                                    keyExtractor={(item, index) => index.toString()}

                                    renderItem={({ item, index }) => (
                                        <View style={{ flex: 1 }}>


                                            <ImageBackground source={{ uri: item }} style={styles.hotelImage} >
                                                <LinearGradient
                                                    colors={['#13131315', '#000']}
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 0, y: 1 }}
                                                    style={styles.imagedetails}
                                                    pointerEvents='none'

                                                >

                                                </LinearGradient>


                                            </ImageBackground>




                                        </View>

                                    )}
                                />
                                <View style={styles.imageDetailsContainer}>
                                    <Text style={styles.imageOverText}>{currentIndex + 1} / {hotel.images.length}</Text>

                                    <View style={styles.hoteldetailscontainer}>

                                        <View style={styles.hoteldetailsbox}>
                                            <Text style={styles.hotelname}>{hotel.name}</Text>
                                            <View style={styles.hotellocation}>
                                                <Feather name='map-pin' size={15} />
                                                <Text style={styles.locationText}>{hotel.place}</Text>
                                            </View>
                                            <View style={styles.price}>
                                                <FontAwesome5 name='rupee-sign' size={15} />
                                                <Text style={styles.priceText}>{hotel.price} / Night</Text>
                                            </View>

                                        </View>
                                        <Spacer height={20} />
                                        <View style={styles.rattingcontainer}>
                                            <View style={styles.rattingback} >
                                                <Text style={styles.ratting}>{hotel.rating}</Text>
                                            </View>
                                            <Text style={styles.ratingcount}>{hotel.ratingCount}  Ratings</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <Spacer height={50} />
                            <View style={styles.travellerdetailscontainner}>
                                <Text style={styles.title}>Traveller Details</Text>
                                <Text style={styles.infoText}>All booking communications will be sent here</Text>

                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Spacer height={20}/>
                                    <View style={styles.traverdetailbox}>

                                        <View style={styles.inputBox}>
                                            <View style={styles.labelBox}>
                                                <Text style={styles.labelText}>Mobile number</Text>
                                            </View>
                                            <Text style={styles.phoneNo}>+91 </Text>
                                            <TextInput
                                                keyboardType="number-pad"
                                                value={mobile}
                                                onChangeText={setMobile}
                                                style={styles.imputField}
                                                maxLength={10}

                                            />
                                        </View>
                                        <Spacer height={10}/>

                                        <View style={styles.inputBox}>

                                            <TextInput
                                                keyboardType="text"
                                                value={name}
                                                onChangeText={setName}
                                                style={styles.imputField}
                                                placeholder='Enter Full Name'
                                                

                                            />
                                        </View>
                                        <Spacer height={10}/>

                                        <View style={styles.inputBox}>

                                            <TextInput
                                                keyboardType="email-address"
                                                value={email}
                                                onChangeText={setEmail}
                                                style={styles.imputField}
                                                placeholder='Enter Email'
                                                

                                            />
                                        </View>
                                        <Spacer height={10}/>
                                        <GuestsNo/>


                                    </View>
                                </View>
                            </View>
                        </View>
                        <Spacer height={150} />


                    </ScrollView>
                </KeyboardAvoidingView>

                <SafeAreaView style={{ backgroundColor: Color.WHITE }} edges={['left', 'right', 'bottom']}>
                    <View style={styles.bottomNavBar}>
                        <TouchableOpacity style={styles.payathotel}>
                            <Text style={styles.bookingText}>Pay @Hotel <FontAwesome5 name='rupee-sign' size={15} /> {hotel.price}</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.paynow}>
                            <Text style={styles.bookingText}>Pay Now <FontAwesome5 name='rupee-sign' size={15} /> {hotel.price}</Text>

                        </TouchableOpacity>

                    </View>
                </SafeAreaView>

            </View>

    )
}

export default HotelBookingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.GRAY,
    },
    imageContainer: {

        alignItems: 'center',
        height: scale(400),
        backgroundColor: Color.BLACK,
        width: scale(350),


    },
    hotelImage: {
        flex: 1,
        height: scale(200),
        width: scale(350),



    },
    navBar: {
        height: scale(60),
        backgroundColor: Color.SKY_BLUE,
        justifyContent: 'center'
    },
    imagedetails: {
        height: scale(200),
        justifyContent: 'flex-end',


    },
    imageOverText: {
        fontSize: scale(15),
        color: Color.WHITE,
        fontWeight: 700,
        marginLeft: scale(20),
        marginBottom: scale(5)
    },
    hoteldetailscontainer: {

        backgroundColor: Color.GRAY,
        borderTopRightRadius: scale(10),
        borderTopLeftRadius: scale(10),
        height: scale(144),


    },
    imageDetailsContainer: {
        justifyContent: 'center',


    },
    hoteldetailsbox: {
        height: scale(120),
        borderRadius: scale(10),
        shadowColor: Color.BLACK,
        elevation: 2,
        backgroundColor: Color.WHITE,
        width: scale(350),
        justifyContent: 'center'


    },
    fullContener: {
        alignItems: "center",


    },
    hotelname: {
        fontSize: scale(18),
        fontWeight: 700,
        marginLeft: scale(10)
    },
    locationText: {
        fontSize: scale(12),
        marginLeft: scale(10)
    },
    hotellocation: {
        flexDirection: 'row',
        marginTop: scale(10),
        marginLeft: scale(10),
        alignItems: 'center'
    },
    price: {
        flexDirection: 'row',
        marginTop: scale(10),
        marginLeft: scale(12),
        alignItems: 'center'
    },
    priceText: {
        marginLeft: scale(10),
        fontWeight: 700,
        color: Color.BTN_GREEN
    },
    rattingback: {
        backgroundColor: Color.BTN_GREEN,
        width: scale(40),
        height: scale(20),
        borderRadius: scale(10),
        marginLeft: scale(20),
        alignItems: 'center',
        justifyContent: 'center',

    },
    ratting: {
        fontSize: scale(15),
        fontWeight: 700,
        color: Color.WHITE
    },
    rattingcontainer: {
        flexDirection: 'row'
    },
    ratingcount: {
        fontSize: scale(14),
        marginLeft: scale(10)
    },
    baclicon: {
        marginLeft: scale(10)
    },
    searchbox: {
        justifyContent: 'center',
        marginLeft: scale(20),
    },
    bottomNavBar: {
        backgroundColor: Color.NAVY_BLUE,
        height: scale(60),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    payathotel: {
        backgroundColor: Color.SKY_BLUE,
        height: scale(35),
        marginRight: scale(10),
        borderRadius: scale(20),
        width: scale(150),
        justifyContent: 'center',
        alignItems: 'center'

    },
    paynow: {
        backgroundColor: Color.BTN_GREEN,
        height: scale(35),
        marginLeft: scale(10),
        borderRadius: scale(20),
        width: scale(150),
        justifyContent: 'center',
        alignItems: 'center'

    },
    bookingText: {
        fontSize: scale(15),
        fontWeight: 700,
        color: Color.WHITE
    },
    travellerdetailscontainner: {
        backgroundColor: Color.GRAY,
        width: scale(350),
        height: scale(200),


    },
    title: {
        fontSize: scale(15),
        fontWeight: 700,
        marginLeft: scale(10)
    },
    traverdetailbox: {
        height: scale(250),
        backgroundColor: Color.WHITE,
        marginTop: scale(15),
        width: scale(320),
        shadowColor: Color.BLACK,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center'


    },
    infoText: {
        fontSize: scale(12),
        marginLeft: scale(10),
        marginTop: scale(5),
    },
    inputBox: {
        backgroundColor: Color.WHITE,
        width: scale(280),
        borderWidth: scale(1),
        borderColor: Color.GRAY,
        height: scale(40),
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
    },
    imputField: {
        width: scale(260),
        height: scale(40),
        fontSize: scale(15),
        fontWeight: 700

    },
    phoneNo: {
        fontSize: scale(15),
        margin: scale(5),
        marginLeft: scale(25),
        marginTop: scale(10),
        fontWeight: 700,
        borderRightWidth:2,
        borderColor:Color.GRAY
    },
    labelBox: {
        position: "absolute",
        top: -10,
        left: 16,
        backgroundColor: "#fff",
        paddingHorizontal: 6,
    },
    labelText: {
        fontSize: scale(12),
        color: "#64748b",
    },
})