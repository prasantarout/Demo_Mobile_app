import React,{useContext} from 'react';
import { SplashScreen,Setting,Home, Starter, Register, ProductInfo,MyCart, AllOrder, Success } from '../screen';
 import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createStackNavigator,TransitionSpecs, HeaderStyleInterpolators, } from '@react-navigation/stack';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import Tabs from './Tabs';

import { AuthContext } from '../components/AuthContext';


const Stack = createStackNavigator();



const MyTransition = {
     gestureDirection: 'vertical',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 1],
              }),
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 0.1],
            outputRange: [0, 0.1],
          }),
        },
      };
    },
  };
 const Routes = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }
const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

const authContext = React.useMemo(() => ({
  toggleTheme: () => {
    setIsDarkTheme( isDarkTheme => !isDarkTheme );
  }
}), []);
 

  return (
    <PaperProvider theme={theme}>
     <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
    <Stack.Navigator
     screenOptions={{
          headerShown: false,
          ...MyTransition,
          animationEnabled:true
        }}
      initialRouteName="SplashScreen"
      >
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen  name="Tabs" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="MyCart" component={MyCart} /> 
        <Stack.Screen name="AllOrder" component={AllOrder} /> 
        <Stack.Screen name="Success" component={Success} /> 
      </Stack.Navigator>
    </NavigationContainer>
 </AuthContext.Provider>
 </PaperProvider>
  )
}


export default Routes;