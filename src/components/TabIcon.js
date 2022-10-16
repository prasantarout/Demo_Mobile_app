//import liraries
import React from 'react';
import { View, Image} from 'react-native';
import { COLORS } from '../constants';

const TabIcon = ({focused,icon}) => {
    return (
        <View style={{
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Image
            source={icon}
            resizeMode="contain"
            style={{
                width:30,
                height:30,
                tintColor:focused ? COLORS.darkGreen : COLORS.lightLime
            }}
            />
            {focused &&
            <View
            style={{
                position:'absolute',
                left:0,
                right:0,
                backgroundColor:COLORS.darkGreen
            }}
            />
            }
        </View>
    );
};


 export default TabIcon;
