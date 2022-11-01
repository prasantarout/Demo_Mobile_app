//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, Dimensions,TextInput,StatusBar,TouchableOpacity, Alert} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
const { width, height } = Dimensions.get('window')
import Textarea from 'react-native-textarea';
import { COLOURS,SIZES } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const Update= ({navigation,route}) => {
  const {item}=route.params;
  console.log(item);
  const [product, setProduct] = useState({
    productName:item.productName,
    description:item.description,
    productPrice:item.productPrice,
    isAvailable:true,
    isOff:false
  });

  const onChangeName = (value) => {
    setProduct({ ...product,  productName: value });
  };

  const onChangeDescription = (value) => {
    setProduct({ ...product,description: value });
  };

  const onChangePrice = (value) => {
    setProduct({ ...product,   productPrice: value });
  };

   const update=()=>{
    if(product.productName=='' && product.productPrice==''&&product.description==''){
      Alert.alert('all field required')
    }else{
      AsyncStorage.setItem('ADD',JSON.stringify(product))
      navigation.goBack('')
    }
   }

    
      return (
        <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" backgroundColor={COLOURS.darkBlue}/>
        <View style={styles.navBar}>
         <TouchableOpacity style={styles.leftContainer} 
            onPress={()=>navigation.goBack('')}
          >
          <Entypo name="arrow-long-left" size={34} color="white"  />
             <Text style={{left:10,fontSize:SIZES.h2,color:'white'}}>Update</Text>
         </TouchableOpacity>
        </View>
          <View style={{left:20,top:70}}>
           <TextInput 
               placeholder="Update product name" 
               style={styles.textInput}
               onChangeText={(value) => onChangeName(value)}
               value={product.productName}
                />
                 <TextInput
                   name="Subject"
                   placeholder="update product price"
                   style={styles.textInput}
                   onChangeText={(value) =>  onChangePrice(value)}
                   value={product.productPrice}
                 />
               <Textarea
                 containerStyle={styles.textareaContainer}
                 style={styles.textarea}
                 maxLength={120}
                 placeholder={'update product description 。。。'}
                 placeholderTextColor={'#c7c7c7'}
                 underlineColorAndroid={'transparent'}
                 onChangeText={(value) =>onChangeDescription(value)}
                 value={product.description}
                 />
             </View>
             <TouchableOpacity style={{
                    backgroundColor:COLOURS.darkBlue,
                    borderColor:COLOURS.darkBlue,
                    borderWidth:1,
                    borderRadius:10,
                  
                    alignItems:'center',
                    left:30,
                    top:height*0.2,
                    width:width*0.8,
                    height:60
                    }}
                    onPress={()=>update()}
                    >
                      <Text style={{
                          textAlign:'center',
                          fontSize:24,
                          fontWeight:'bold',
                          padding:10,
                          color:'white'
                      }}>Update</Text>
                    </TouchableOpacity>
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
        backgroundColor:COLOURS.darkBlue,
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.9,
         shadowRadius: 0.8,
         elevation: 4,
         top:20
      },
      leftContainer: {
        justifyContent: 'flex-start',   
         flexDirection: 'row',
         left:40
     },
});

//make this component available to the app
export default Update;
