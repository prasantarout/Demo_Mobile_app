//import liraries
import 'react-native-gesture-handler';
import React,{useRef,useEffect,useState,useContext} from 'react';
import { View, Text, StyleSheet,TextInput, Dimensions,Image,
         TouchableOpacity,StatusBar,ScrollView,Alert} from 'react-native';
import {icons, images,COLORS} from '../../constants';
const { width, height } = Dimensions.get('window');
import  {Formik} from 'formik'
import  LinearGradient  from 'react-native-linear-gradient';
import { SvgTop } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


   const Register = ({navigation}) => {
     const handleRegister=(value)=>{
        console.log(value);
      if(value==undefined && value==null && value==false){
        Alert.alert('something went wrong')
      }else{
        Alert.alert('successfully register');
        AsyncStorage.setItem('REGISTER',JSON.stringify(value))
        navigation.navigate('Tabs')
     }
   }

    return (
          <ScrollView contentContainerStyle={{paddingBottom:100}}>
            <View style={styles.mainContainer}>
           <StatusBar barStyle='light' backgroundColor='#002851' />
          <View style={styles.containerSVG}>
            <SvgTop/>
          <Formik
           initialValues={{ name:'', email: '', password: '',}}
           onSubmit={(value) => {
            if (value.email == '' || value.password == '' || value.name == '') {
                Alert.alert('All fields are required')
           }else if (value.password.length<8) {
              Alert.alert('password must be greater than 8 digits')
            }
            else{
              handleRegister(value);
             }
          }}>
          {({ handleChange, handleBlur,isSubmitting,handleSubmit,values}) => (
             <>
          
              <TextInput
                       name="email"
                       placeholder="Enter your name"
                       style={styles.textInput}
                       onChangeText={handleChange('name')}
                       onBlur={handleBlur('name')}
                       value={values.name}
                       placeholderTextColor='black'
                       keyboardType="email-address"
                    />
                    <TextInput
                       name="email"
                       placeholder="Enter your email"
                       style={styles.textInput}
                       onChangeText={handleChange('email')}
                       onBlur={handleBlur('email')}
                       value={values.email}
                       placeholderTextColor='black'
                       keyboardType="email-address"
                    />
                 <TextInput
                       name="password"
                       placeholder="Password"
                       placeholderTextColor='black'
                       style={styles.textInput}
                       onChangeText={handleChange('password')}
                       onBlur={handleBlur('password')}
                       value={values.password}
                       secureTextEntry
                      />
                     
             <TouchableOpacity style={styles.containers}
               onPress={handleSubmit}
               
                 >
                 <LinearGradient
                     // Button Linear Gradient
                     colors={['#002851', '#002851']}
                     start={{x: 0, y: 0}}
                     end={{x: 1, y: 1}}    
                     style={{
                       width: '140%',
                       height: 50,
                       borderRadius: 20,
                       padding: 10,
                       alignItems: 'center',
                       justifyContent: 'center',
                     }}
                 >
                   <Text style={styles.text}>SIGN UP</Text>
                     </LinearGradient>
               </TouchableOpacity>
               
         </>
        )}
       </Formik>
      
      </View>
   </View>
</ScrollView>

    );
};

// define your styles
const styles =StyleSheet.create({
    mainContainer: {
        flex: 1,
      
      },
    
      containerSVG: {
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
       },
     containers: {
        alignItems: 'center',
        width: 200,
        top:100
    },

    text: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
    },
      textInput: {
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
       // marginTop:20,
         top:40,
         marginTop:20,
        borderRadius: 30,
        backgroundColor: '#E5E8E8',
        //color:COLORS.black
      },
    
    
});

//make this component available to the app
export default Register;
