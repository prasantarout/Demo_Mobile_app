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
import{ AuthContext } from '../components/AuthContext';
import { useTheme } from '@react-navigation/native';
const Setting = () => {
    const paperTheme = useTheme();
    const {  toggleTheme } = React.useContext(AuthContext);
    const { colors } = useTheme();
     const theme = useTheme();
    return (
        <View style={{ flex: 1,top:50 }}>
            <StatusBar  barStyle= { theme.dark ? "light-content" : "dark-content" }/>
         <TouchableRipple onPress={() => {toggleTheme()}}>
            <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                    <Switch value={paperTheme.dark}/>
                </View>
                 </View>
        </TouchableRipple>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
     },
     preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
});

//make this component available to the app
export default Setting;
