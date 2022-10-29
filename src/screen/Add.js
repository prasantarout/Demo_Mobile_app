//import liraries
import React, { Component, useState,useEffect} from 'react';
import { View, Text, StyleSheet,Dimensions,TouchableOpacity,StatusBar,TextInput,BackHandler,Alert } from 'react-native';
const {height,width}=Dimensions.get('window')
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES,FONTS} from '../constants';
import Textarea from 'react-native-textarea';
import FlashMessage, {
    showMessage,
    hideMessage
  } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';



// create a component
const Add = ({props,navigation,route}) => {
    const { colors } = useTheme();
    const theme = useTheme();
    const [state,setState]=useState()
    const [itemData,setItemData]=useState({
       title:'',
        body:''
    })
    const onChangeTitle = (value) => {
      setItemData({ ...itemData, title: value });
    };
  
    const onChangeBody = (value) => {
      setItemData({ ...itemData,body: value });
    };
    
    const AddItem=()=>{
      if(itemData.title==='' && itemData.body===''){
        Alert.alert('All fields are required')
      }else{
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body:JSON.stringify({
            title:itemData.title,
            body: itemData.body,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then((response) => response.json())
          .then((response) =>{
            AsyncStorage.setItem('ITEM',JSON.stringify(response));
            navigation.goBack('');
          }).catch((error)=>{
            console.log(error);
          }) 
        }
    }
   
      function handleBackButtonClick(){
        // console.log("back Pressed wow")
        Alert.alert(
            'Exit',
            'Do you really want to go back to home screen?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => navigation.goBack('')
            },], {
            cancelable: false
        }
        )
        return true;
    }
     
      useEffect(() => {
       BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => backHandler.remove();
      }, []);
   
   
   
      return (
        <View style={styles.mainContainer}>
        <StatusBar  barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <View style={styles.navBar}>
         <View >
           <TouchableOpacity 
           style={styles.leftContainer}
           onPress={handleBackButtonClick}
           >
             <Icon name="long-arrow-left" size={44} color="white" 
             style={{
               marginLeft:"10%",
               width:100,
               top:5
               }} />
             <Text style={{
               right:40,
               top:10,
               fontSize:SIZES.h2,
               color:'white'}}>Add</Text>
               </TouchableOpacity>
         </View>
      </View>
      <FlashMessage position="top" style={{top:60}}/>
      <View style={{left:20,top:70}}>
       
             <TextInput
               name="Subject"
               placeholder="Add Title"
               style={styles.textInput}
               onChangeText={(value) => onChangeTitle(value)}
                    />
               <Textarea
                 containerStyle={styles.textareaContainer}
                 style={styles.textarea}
                 maxLength={120}
                 placeholder={'type your body description 。。。'}
                 placeholderTextColor={'#c7c7c7'}
                 underlineColorAndroid={'transparent'}
                 onChangeText={(value) => onChangeBody(value)}
             />
             
                   <TouchableOpacity style={{
                   backgroundColor:COLORS.darkBlue,
                   borderColor:COLORS.darkBlue,
                   borderWidth:1,
                   borderRadius:10,
                   //right:50,
                   bottom:40,
                   top:50,
                   width:width*0.9,
                   height:60
                   }}
                 onPress={AddItem}
                   >
                     <Text style={{
                         textAlign:'center',
                         fontSize:24,
                         fontWeight:'bold',
                         padding:10,
                         color:'white'
                     }}>Add</Text>
                   </TouchableOpacity>
                </View>
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f1f1f1',
        flex: 1,
       },
   textInput: {
        padding: 10,
        paddingStart: 30,
        width: '95%',
        height: 60,
        right:10,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
      },
   textareaContainer: {
        height: 150,
        padding: 5,
        right:5,
        width:'92%',
        backgroundColor: '#fff',
        borderRadius:10,
        top:20
      },
      textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        left:10,
        color: '#333',
      },
      navBar: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
         borderBottomWidth: 1,
        backgroundColor:COLORS.colorGray,
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.9,
         shadowRadius: 0.8,
         elevation: 4,
      },
      leftContainer: {
        justifyContent: 'flex-start',   
         flexDirection: 'row',
         left:15,
         top:5
     },
});

//make this component available to the app
export default Add;
