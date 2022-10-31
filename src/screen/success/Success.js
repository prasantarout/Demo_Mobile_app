import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View ,TouchableOpacity,StatusBar, Alert,Image,Dimensions,ScrollView} from 'react-native';
import { styles } from './TimeLine';
const { width, height } = Dimensions.get("window");
 const Success = ({route,navigation}) => {
  
    return (
    <SafeAreaView style={styles.root}>
      <View style={{backgroundColor:'white'}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent
      />
      <View>
      <Image source={require('../../assets/images/success.png')} style={{
        width:width*0.8,
        height:height*0.4,
        left:20,
        bottom:height*0.08
       }}
        />    
     </View>
     <View style={{
        alignItems:'center'
     }}>
     <Text style={{
        fontSize:44,
        color:'black',
        fontWeight:'bold',
        bottom:30
     }}>Thank You!</Text> 
     <Text style={{
        fontSize:15,
        color:'black',

     }}>your order was Successfully placed</Text>      
    </View> 
     </View>
         <View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Tabs')}
               activeOpacity={0.2}
               style={styles.button}
                 >
                  <Text style={{color:'white',fontSize:24,fontWeight:'bold'}}>Continue</Text>
              </TouchableOpacity>
        </View>
    </SafeAreaView >
   
);
}
export default Success