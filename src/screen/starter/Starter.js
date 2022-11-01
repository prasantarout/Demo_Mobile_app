//import liraries
import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image,FlatList,StatusBar, Dimensions } from 'react-native';

import dataItem from '../../dataItem';
import { SIZES } from '../../constants';
const {height,width}=Dimensions.get('window')
const Starter = ({navigation}) => {
    
    const [delay,setDelay]=useState(true);
   
    return (
     
       <View style={{flex:1,backgroundColor:'blue'}}> 
    <StatusBar barStyle='light-content' backgroundColor='blue'/>       
     <Text style={{textAlign:'center',top:100,fontSize:SIZES.largeTitle,color:'white'}}>Register As</Text>
    <View  style={{flex:1,justifyContent:'center',alignItems:'center',top:height*0.2,}}>
    <FlatList
     data={dataItem}
     renderItem={ ({item}) =>
     <TouchableOpacity onPress={()=>navigation.navigate('Register',{data:item.key})}
      style={styles.GridViewContainer}
      activeOpacity={0.4}
      >
           <Image resizeMode='cover' style={styles.image} source={item.logo}/> 
        <Text style={{
          
            fontSize:20,
            color:'black',
            fontWeight:'bold',
           textAlign:'center'
        }}>{item.title}</Text>
       </TouchableOpacity>
     
     }
    />
    </View>
  </View>
  
    );
};

// define your styles
const styles = StyleSheet.create({
   
      GridViewContainer: {
       justifyContent: 'center',
       alignItems: 'center',
       
       backgroundColor:"white",
       borderRadius:10,
       margin:20,
       height:height*0.18,
       elevation:10,
       width:width*0.6,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 3 },
       shadowOpacity: 0.5,
       shadowRadius: 5,
   },
   image:{
     width:width*0.2,
     height:height*0.1,
     alignItems:'center',
     justifyContent:'center'
   }
     
    


 
});

export default Starter;
