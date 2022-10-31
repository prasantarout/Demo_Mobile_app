//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, useEffect,useState } from 'react';
import { View, Text, StyleSheet,ScrollView, Dimensions,TouchableOpacity,Image} from 'react-native';
const {height,width}=Dimensions.get('window')
import { COLOURS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
const AllOrder = () => {
    const paperTheme = useTheme();
    const { colors } = useTheme();
    const theme = useTheme();
  const [item,setItem]=useState([])
    useEffect(()=>{
        async function getItem(){
          
            let data;
         await AsyncStorage.getItem('cartItems').then(product=>{
            if(product!=null){
              const dataItem=JSON.parse(product);
                console.log(dataItem);
                data=dataItem;
                setItem(data);
            }
         })
        }
        getItem();
    },[])

    return (
        <View style={{
            flex:1,
            top:20,
            backgroundColor:theme.dark ? COLOURS.lightLime:COLOURS.white
        }}>
          <Text style={{
         color:theme.dark ? COLOURS.blue:COLOURS.black,
         textAlign:'center',
         fontSize:24,
         top:20,
         fontWeight:'bold'
        }}>All Orders</Text>
        {item.map((data,index)=>(
       <TouchableOpacity
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
          top:height*0.05,
          left:width*0.04
        }} 
        key={index}
        >
        <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}>
          <Image
            source={data.productImage}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              {data.productName}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
                &#8377;{data.productPrice}
              </Text>
              <Text>
                (~&#8377;
                {data.productPrice + data.productPrice / 20})
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
               <View
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding:1,
                  borderWidth: 1,
                  borderColor: COLOURS.green,
                  opacity: 0.5,
                }}>
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    fontSize: 16,
                    color: COLOURS.green,
                  }}
                />
              </View>
              <Text>Completed</Text>
             </View>
          </View>
        </View>
      </TouchableOpacity>
       ))}
    </View>
 );
};

// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
export default AllOrder;
