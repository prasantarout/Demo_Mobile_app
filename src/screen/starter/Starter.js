//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const {height,width}=Dimensions.get('window')
// create a component
const Starter = ({navigation}) => {
    const [count,setCount]=useState(1);

    function Navigate(){
        if(count==1){
            navigation.navigate('Tabs')
        }else if(count==2){
            navigation.navigate('')
        }
    }
    return (
        <View style={styles.container}>
           <View style={styles.top}>
            <Text style={{
                 fontSize:30,
                  color:'white',
                  fontWeight:'bold',
            }}>Register As</Text>
           </View>
           <View style={styles.bottom}>
           <View style={styles.routes}>
          <TouchableOpacity style={styles.card} 
          onPress={()=>navigation.navigate('Register')}
          >
          <FontAwesome name="user"
                 size={34} 
                 color="blue" 
                 style={{top:20,left:40}}
                />
            <Text style={{
                fontSize:16,
                top:22,
                textAlign:'center',
                color:'black',
                fontWeight:'bold'
                }}>User</Text>
             </TouchableOpacity>
            </View>
            <View style={styles.routes}>
          <TouchableOpacity style={styles.card} 
            onPress={()=>navigation.navigate('Register')}
          >
          <FontAwesome name="lock"
                 size={34} 
                 color="blue" 
                 style={{top:20,left:40}}
                />
            <Text style={{
                fontSize:16,
                top:22,
                textAlign:'center',
                color:'black',
                fontWeight:'bold'
                }}>Admin</Text>
             </TouchableOpacity>
            </View>
          </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:'blue'
    },
    top:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        bottom:height*0.1
    },
    bottom:{
    bottom:height*0.45,
    flexDirection:'row',
    padding:10

    },
    routes:{
        flex:1,
        flexDirection:'row',

        },
        card:{
            width:width*0.27,
            height:height*0.14,
            backgroundColor:'#F2F3F4',
            elevation:2,
            left:8,
            margin:30,
            borderRadius:5
        },
});

//make this component available to the app
export default Starter;
