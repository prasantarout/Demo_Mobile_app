

import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
 
} from 'react-native';
import Routes from './src/navigation/Routes';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  LogBox.ignoreLogs(["EventEmitter.removeListener",]);
   return (
    <SafeAreaView style={{flex:1}}>
     <Routes/>
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
