//import liraries
import React, { Component } from 'react';
import { View, TouchableOpacity,StyleSheet, StatusBar } from 'react-native';
import {
   
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import{ AuthContext } from '../../components/AuthContext';
import { useTheme } from '@react-navigation/native';
import { COLOURS } from '../../constants';
const Setting = () => {
    const paperTheme = useTheme();
    const {  toggleTheme } = React.useContext(AuthContext);
    const { colors } = useTheme();
     const theme = useTheme();
    return (
        <View style={{ flex: 1,top:10,backgroundColor:theme.dark ?COLOURS.lightLime:COLOURS.white }}>
            <StatusBar  barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <TouchableOpacity onPress={() => {toggleTheme()}} style={{top:40}}>
           <View style={styles.preference}>
           <Text style={{
                    color:theme.dark ?COLOURS.black:COLOURS.black
                }}>Dark Theme</Text>
                <View pointerEvents="none">
                    <Switch value={paperTheme.dark}/>
                </View> 
                </View>
        </TouchableOpacity>
        
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
   
     preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      
      },
});

//make this component available to the app
export default Setting;
