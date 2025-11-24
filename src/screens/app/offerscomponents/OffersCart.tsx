import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { Color, ImagesAll } from '../../../constant'
import { Screen } from 'react-native-screens'
import LinearGradient from 'react-native-linear-gradient'

const OffersCart = ({ horizontal = { boolean }, flexDirection = '' }) => {
  return (
    <ScrollView
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: scale(20)
      }}
    >
      <View style={[styles.container, { flexDirection: flexDirection }]}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }} style={styles.cart}>
          <ImageBackground source={ImagesAll.CART1} resizeMode='cover'>
            <TouchableOpacity>
              <View style={styles.imageOverlay}>
                <View style={styles.textBack}>
                  <Text style={styles.HeadingTitle}>DEAL OF THE MONTH</Text>
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Up to 50% off</Text>
                    <Text style={styles.title}>+500 Basaicredits</Text>
                  </View>

                </View>


              </View>
            </TouchableOpacity>

          </ImageBackground>

        </LinearGradient>
        <View style={styles.cart}>
          <ImageBackground source={ImagesAll.CART2} resizeMode='cover'>
            <TouchableOpacity>
              <View style={styles.imageOverlay}>
                <View style={styles.textBack}>
                  <Text style={[styles.HeadingTitle, { width: scale(80) }]}>LONGSTAY</Text>
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Up to 45% off </Text>
                  </View>

                </View>


              </View>
            </TouchableOpacity>
          </ImageBackground>

        </View>
        <View style={styles.cart}>
          <ImageBackground source={ImagesAll.CART3} resizeMode='cover'>

            <TouchableOpacity>
              <View style={styles.imageOverlay}>
                <View style={styles.textBack}>
                  <Text style={[styles.HeadingTitle, { width: scale(80) }]}>PREPAID</Text>
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>Flat 25% off</Text>
                  </View>

                </View>


              </View>
            </TouchableOpacity>
          </ImageBackground>

        </View>
      </View>
    </ScrollView>
  )
}

export default OffersCart

const styles = StyleSheet.create({
  cart: {
    borderRadius: scale(10),
    height: moderateScale(200),
    width: moderateScale(350),
    marginTop: moderateScale(10),
    marginLeft: moderateScale(15),
    marginRight: moderateScale(15),
    overflow: 'hidden',





  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',


  },
  imageOverlay: {
    height: scale(200),

  },
  textBack: {
    backgroundColor: 'rgba(0, 0, 0, 0.26)',
    height: scale(500)
  },
  textContainer: {
    marginTop: scale(90),
    marginLeft: scale(10),

  },
  title: {
    color: Color.WHITE,
    fontWeight: 700,
    fontSize: scale(15)
  },
  HeadingTitle: {
    backgroundColor: Color.WHITE,
    width: scale(130),
    height: scale(20),
    borderRadius: scale(5),
    marginTop: scale(20),
    marginLeft: scale(10),
    color: Color.BLACK,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: scale(2),
    fontWeight: 700
  }

})