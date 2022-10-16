import React from "react";
import { View,} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {COLORS,FONTS,icon} from '../constants';
import { Home,Setting} from "../screen"
import {TabIcon} from '../components';
const Tab = createBottomTabNavigator();

const Tabs = () => {
      return (
       <Tab.Navigator
        screenOptions={{
            "tabBarShowLabel": false,
            safeAreaInsets: {
               top:0,
                bottom:0,
                left: 0,
                right: 0,
                
              },
              tabBarStyle:{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                height:60,
                elevation:5,
                backgroundColor:COLORS.gray2,
                borderTopColor:"transparent",
             },
             tabBarLabelStyle: {
                fontSize: 20,
              },
        }}
         >
           <Tab.Screen
                name="Home"
                component={Home}
                options={{
                      tabBarIcon:({focused})=><TabIcon focused={focused} icon={icon.home}/>,
                      headerShown: false

                }}
              
                />
                 
               <Tab.Screen 
                name="Setting"
                component={Setting}
                 options={{
                    tabBarIcon:({focused})=><TabIcon focused={focused} icon={icon.setting}/>,
                    headerShown: false

                }}
            /> 
</Tab.Navigator>
    )
    
}

export default Tabs;