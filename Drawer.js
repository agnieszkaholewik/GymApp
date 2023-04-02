import * as React from 'react';
import 'react-native-gesture-handler';
import Home from '../GymApp/screens/Home';
import Spisćwiczeń from '../GymApp/screens/SpisĆwiczeń';
import Pomiary from '../GymApp/screens/Pomiary';
import Stoper from '../GymApp/screens/Stoper'
import TwójTrening from '../GymApp/screens/TwójTrening';
import Przypomnienia from '../GymApp/screens/Przypomnienia';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
     return (
        <Drawer.Navigator
        
        useLegacyImplementation
        screenOptions={{
        headerTintColor:'white',
        drawerActiveBackgroundColor:'#afeeee',
        drawerActiveTintColor:'black',
        
      
        
      }}
      >
        <Drawer.Screen name="Home" component={Home} options={{title: 'Ekran startowy', headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                
               },}}/>
        <Drawer.Screen name="SpisĆwiczeń" component={Spisćwiczeń} options={{title:'Zbiór ćwiczeń',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                
               },}}/>
        <Drawer.Screen name="Stoper" component={Stoper} options={{title:'Stoper',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                
               },}} />
        <Drawer.Screen name="Pomiary" component={Pomiary} options={{title:'Monitorowanie wagi',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                
               },}}/>
        <Drawer.Screen name="TwójTrening" component={TwójTrening} options={{title:'Twój trening',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                
               },}}/>
        <Drawer.Screen name="Przypomnienia" component={Przypomnienia}options={{headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                
               },}}/> 
      </Drawer.Navigator>
     );
};
export default DrawerNavigator;