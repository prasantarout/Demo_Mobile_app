import React from "react";
import { View,} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {COLORS,COLOURS,FONTS,icon} from '../constants';
import { Home,Setting,AllOrder} from "../screen"
import {TabIcon} from '../components';
const Tab = createBottomTabNavigator();

const Tabs = () => {
      return (
       <Tab.Navigator
        screenOptions={{
            "tabBarShowLabel":true,
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
                height:70,
                elevation:10,
                backgroundColor:COLOURS.backgroundLight,
                borderTopColor:"transparent",
             },
             tabBarLabelStyle: {
              fontSize:18,
              color:'black'
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
             <Tab.Screen 
                name="Orders"
                component={AllOrder}
                 options={{
                    tabBarIcon:({focused})=><TabIcon focused={focused} icon={icon.order}/>,
                    headerShown: false

                }}
            /> 
</Tab.Navigator>
    )
    
}

export default Tabs;