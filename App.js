

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
 
} from 'react-native';
import Routes from './src/navigation/Routes';
import { LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from './src/components/Content';
const App = () => {
  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  LogBox.ignoreLogs(["EventEmitter.removeListener",]);
  const [appReady,setAppReady]=useState(false);
  const [storeCredential,setStoreCredential]=useState();
 
  const CheckLoginCredential=()=>{
    AsyncStorage.getItem('GirkiDeriver').then((result)=>{
       if(result !==null){
        setStoreCredential(JSON.parse(result));
       }else{
         setStoreCredential(null);
       }
    }).catch((error)=>{
      console.log(error);
    })
  } 
   return (
    <SafeAreaView style={{flex:1}} startAsync={CheckLoginCredential}>
      <Context.Provider  value={{storeCredential,setStoreCredential}}>
     <Routes/>
     </Context.Provider>
   </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
 });

export default App;
