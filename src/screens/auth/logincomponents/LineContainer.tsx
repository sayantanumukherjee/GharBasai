import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Color } from '../../../constant'

const LineContainer = () => {
    return (
        <View style={styles.LineContainer}>
            <Text style={styles.TextHead}>Get ₹1,499 on sign up</Text>
            <TouchableOpacity style={styles.Skipbtn}>
                <Text style={styles.SkipText}>Skip</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LineContainer

const styles = StyleSheet.create({
    LineContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(9)

    },
    TextHead: {
        color: Color.BLACK,
        fontSize: moderateScale(19),
        fontWeight: 600,
        marginLeft: moderateScale(23),

        flex: 1

    },
    Skipbtn: {
        alignItems: 'center',
        borderColor: Color.BTN_BORDER,
        borderWidth: 2,
        width: moderateScale(49),
        height: moderateScale(40),
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 20

    },
    SkipText: {
        color: "#777777",
        fontWeight: 400
    },
})