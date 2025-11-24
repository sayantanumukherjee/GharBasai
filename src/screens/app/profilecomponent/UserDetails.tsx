import { Animated, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { Color, ImagesAll } from '../../../constant'




const UserDetails = () => {
    const data = {
  id: 1,
  name: 'Download Task',
  progress: 10
}
    const animation = new Animated.Value(data.progress);

  const widthInterpolated = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  })
    return (
        <View style={styles.header}>
            <ImageBackground
                source={ImagesAll.PROFILE_BACK_PNL}
                style={styles.imageBack}

            >

                <Text style={styles.headerTitle}>Blue</Text>
                <Text style={styles.subheaderTitle}>A-List Membership</Text>


                <View style={styles.profileContener}>
                    <View style={styles.row}>
                        <View style={styles.roundedImage}>
                            <Image source={ImagesAll.PROFILE_IMAGE_DEFAULT} style={styles.profileImagePNG} resizeMode='contain' />
                        </View>
                        <View style={styles.userdetail}>
                            <Text style={styles.userName}>Guest User</Text>
                            <Text style={styles.PhoneNo}>+91 9641750211</Text>
                            <Text style={styles.joinDate}>Member since Apr 2025</Text>


                        </View>

                    </View>
                    <View style={{ flex: 1 }}>
                        
                            <Text style={styles.text}>{data.progress}% Profile completed</Text>
                            <View style={styles.progressBar}>
                                <Animated.View style={[styles.progressFill, { width: widthInterpolated }]} />
                            </View>
                            <Text style={styles.progerssText}>Add details for better & personalized booking experience</Text>
                        </View>
                    

                </View>

            </ImageBackground>



        </View>
    )
}

export default UserDetails

const styles = StyleSheet.create({
    header: {
        height: scale(240),

    },
    headerTitle: {
        fontSize: scale(15),
        fontWeight: 500,
        marginTop: scale(10),
        marginLeft: scale(5)

    },
    subheaderTitle: {
        fontSize: scale(12),
        marginLeft: scale(5),
        color: Color.WHITE,
        fontWeight: 500



    },



    imageBack: {
        height: scale(120)
    },
    profileContener: {
        backgroundColor: Color.WHITE,
        marginHorizontal: scale(25),
        height: scale(140),
        marginTop: scale(20),
        borderRadius: scale(15),
        shadowColor: Color.BLACK,
        elevation: 4,

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
    userdetail: {
        marginLeft: scale(10),
    },
    userName: {
        fontSize: scale(15),
        fontWeight: 700
    },
    PhoneNo: {
        fontSize: scale(12)
    },
    joinDate: {
        fontSize: scale(10)
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginTop: scale(15),
        marginLeft: scale(10)
    },
    text:{
        marginLeft:scale(20),
        fontSize:scale(14),
        fontWeight:700,
         
    },
    progressBar:{
        backgroundColor:Color.GRAY,
        
        height:scale(2),
        marginHorizontal:scale(20),
        marginTop:scale(8)
    },
    progerssText:{
        fontSize:scale(10),
        textAlign:'center',
        marginTop:scale(2)
    },
    progressFill:{
        backgroundColor:Color.NAVY_BLUE,
        height:scale(2)
    }
})