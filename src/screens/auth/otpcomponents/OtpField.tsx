import { StyleSheet, Text, View ,TextInput ,KeyboardAvoidingView,ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { Color } from '../../../constant'
import { Spacer } from '../../../components/framework/boots'
import { useNavigation } from '@react-navigation/native'

const OtpField = () => {
   const navigator = useNavigation()
    const [count,setCount]=useState(10)
    
    useEffect(()=>{
      const interval =setInterval(()=>{
        if(count==0){
          clearInterval(interval)
        }
        else{
          setCount(count-1)
        }
      },1000)
      return()=>{
        clearInterval(interval)
      }
    },[count])
    const e1 =useRef()
    const e2 =useRef()
    const e3 =useRef()
    const e4 =useRef()
    const e5 =useRef()
    const e6 =useRef()

    const[t1,setT1]=useState('')
    const[t2,setT2]=useState('')
    const[t3,setT3]=useState('')
    const[t4,setT4]=useState('')
    const[t5,setT5]=useState('')
    const[t6,setT6]=useState('')


    const handleOtp =()=>{
      navigator.navigate('MainApp')
    }

    useEffect(()=>{
             const timer =setTimeout(()=>{
                if(e1.current){
                  e1.current.focus()
                }
             },300)
             return () => clearTimeout(timer)
    },[])

  return (
    <View>
     <KeyboardAvoidingView behavior='padding'>
     <ScrollView >

    <View style={styles.OtpView}  >
        

      <TextInput  ref={e1} style={[styles.InputView,{borderColor:t1.length >=1 ? Color.BTN_GREEN:Color.GRAY}]} keyboardType='number-pad' maxLength={1}
      value={t1}
      onChangeText={(text)=>{
        setT1(text)
        if(text.length >= 1){
          e2.current.focus()
        }
        else if(text.length <=1){
            e1.current.focus()
        }
        
      }}/>
      <TextInput ref={e2} style={[styles.InputView,{borderColor:t2.length >=1 ? Color.BTN_GREEN:Color.GRAY}]} keyboardType='number-pad' maxLength={1}
      value={t2}
      onChangeText={(text)=>{
        setT2(text)
        if(text.length >= 1){
          e3.current.focus()
        }

        else if(text.length <=1){
            e1.current.focus()
        }
        
      }}/>
      <TextInput ref={e3} style={[styles.InputView,{borderColor:t3.length >=1 ? Color.BTN_GREEN:Color.GRAY}]} keyboardType='number-pad' maxLength={1}
      value={t3}
      onChangeText={(text)=>{
        setT3(text)
        if(text.length >= 1){
          
          e4.current.focus()
        }
        else if(text.length <=1){
            e2.current.focus()
        }
        
      }}/>
      <TextInput ref={e4} style={[styles.InputView,{borderColor:t4.length >=1 ? Color.BTN_GREEN:Color.GRAY}]} keyboardType='number-pad' maxLength={1}
      value={t4}
      onChangeText={(text)=>{
        setT4(text)
        if(text.length >= 1){
          e5.current.focus()
        }
        else if(text.length <=1){
            e3.current.focus()
        }
        
      }}/>
      <TextInput ref={e5} style={[styles.InputView,{borderColor:t5.length >=1 ? Color.BTN_GREEN:Color.GRAY}]} keyboardType='number-pad' maxLength={1}
      value={t5}
      onChangeText={(text)=>{
        setT5(text)
        if(text.length >= 1){
          e6.current.focus()
        }
        else if(text.length <=1){
            e4.current.focus()
        }
        
      }}/>
      <TextInput ref={e6} style={[styles.InputView,{borderColor:t6.length >=1 ? Color.BTN_GREEN:Color.GRAY}]} keyboardType='number-pad' maxLength={1}
      value={t6}
      onChangeText={(text)=>{
        setT6(text)
        if(text.length >= 1){
          e6.current.focus()
        }
        else if(text.length <=1){
            e5.current.focus()
        }
        
      }}/>
      
    </View>

    </ScrollView>
      </KeyboardAvoidingView> 
      <View style={styles.ResendOtp}>
                    <Text style={styles.textEdit}>Did not receive OTP?</Text>
                    <Text
                    
                    style={{marginLeft:moderateScale(16), color:count==0 ? Color.TEXT_RED :Color.GRAY ,fontWeight:700}}
                    onPress={()=>setCount(10)}
                    >Resend it </Text>
                    {count !== 0 && (
                        <Text style={{fontSize:moderateScale(14), fontWeight:700}} >{count}</Text>
                    )}
                    
                  </View>
                  <Spacer height={10}/>

      <View style={styles.OtpButton}>
                     <TouchableOpacity disabled={t1 !== ''&& t2 !==''&& t3!=''&& t4!=''&& t5!=''&& t6!='' ?false:true} onPress={handleOtp}
                     
                     style={[styles.btnOtp,{backgroundColor:t1 !== ''&& t2 !==''&& t3!=''&& t4!=''&& t5!=''&& t6!='' ? Color.BTN_GREEN:'#35664a99'}]}>
                      <Text style={styles.OtpButtonText}>Submit Otp</Text>
                     </TouchableOpacity>
                  </View>

                  

      </View> 
    
    
    
  )
}

export default OtpField

const styles = StyleSheet.create({
    OtpView:{
        flexDirection:'row',
        justifyContent:'center'

        
    },
    InputView:{
      borderWidth:scale(2),
      borderColor:Color.BTN_BORDER,
      marginVertical:scale(20),
      marginHorizontal:scale(5),
      height:scale(46),
      width:scale(46),
      borderRadius:moderateScale(5),
      fontSize:moderateScale(20),
      textAlign:'center'

    },
    OtpButton:{
    flex:0,
    alignItems:'center',
    
    
    
    
    
  },
  btnOtp:{
    backgroundColor:Color.BTN_GREEN,
    height:moderateScale(47),
    width:moderateScale(360),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    
    
    
    
    

  },
  OtpButtonText:{
     fontWeight:700,
     color:Color.WHITE,
     fontSize:moderateScale(18)
  },
  ResendOtp:{
    flexDirection:'row',
    marginLeft:moderateScale(13)

  },
  textEdit:{
    fontSize:moderateScale(13)
  }
})