import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './Drawer';
import HeaderBackButton from '@react-navigation/elements';
import HomeTabNavigator from './routes/HomeStack';
import 'react-native-gesture-handler';



export default function App() {
  return (

    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>

  );
}





    


