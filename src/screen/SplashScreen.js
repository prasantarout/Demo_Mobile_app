//import liraries
import React, { useEffect,useState } from 'react'
import {  Text, View,StatusBar,Dimensions,StyleSheet,Image, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const SplashScreen = ({navigation}) => {

  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT=Dimensions.get('window').height;


  useEffect(()=>{
    setTimeout(()=>{
     navigation.navigate('Tabs')
     },100)
   },[])

 return (
  <>
  <StatusBar translucent backgroundColor="transparent"/>
  <View style={styles.container}>
      <ImageBackground  style={styles.imgBackground}>
        <LinearGradient
          colors={["#09203f", "#537895"]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}    
          style={styles.linearGradient}
        >
          <Text style={styles.text}>THINKWIK</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
</>
  
      
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color:'red',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '(rgba(4, 3, 50, 1), rgba(71, 71, 96, 0.88),rgba(17, 16, 59, 0.9768),rgba(17, 16, 59, 0.9768)',
    textShadowOffset: { width: -1, height: 10 },
    textShadowRadius: 10,
    elevation:10
  }
});
export default SplashScreen
