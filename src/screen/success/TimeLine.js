import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
const {height,width}=Dimensions.get('window')
export const styles = StyleSheet.create({
root: {
    height:height*1.22,
    padding: 20,
    //flex:1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    bottom:110
},
title: {
    textAlign: 'left',
    fontSize: 20,
    marginStart: 20,
    fontWeight:'bold',
    top:40
},
subTitle: {
    textAlign: 'left',
    fontSize: 16,
    marginStart: 20,
    marginTop:50
},
codeFieldRoot: {
    marginTop: 40,
    width: '80%',
    marginLeft: 30,
    marginRight: 20,
},
cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
 },
 cellText: {
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
},
focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
},

button: {
    marginTop: 60,
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
    backgroundColor:'blue',
    width:width*0.5,
    height:60,
    left:70,
    color:'white',
    borderRadius:10
},


})