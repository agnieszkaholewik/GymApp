import * as React from 'react';
import 'react-native-gesture-handler';
import Home from '../GymApp/screens/Home';
import Spisćwiczeń from '../GymApp/screens/SpisĆwiczeń';
import Pomiary from '../GymApp/screens/Pomiary';
import Stoper from '../GymApp/screens/Stoper'
import TwójTrening from '../GymApp/screens/TwójTrening';
import Przypomnienia from '../GymApp/screens/Przypomnienia';
import Plecy from './screens/Cwiczenia/Plecy';
import Barki from './screens/Cwiczenia/Barki';

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Klatka from './screens/Cwiczenia/Klatka';
import Biceps from './screens/Cwiczenia/Biceps';
import Triceps from './screens/Cwiczenia/Triceps';
import Udaipos from './screens/Cwiczenia/Udaipos';
import Brzuch from './screens/Cwiczenia/Brzuch';
import Lydki from './screens/Cwiczenia/Lydki';





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
                
               }, }}/> 

     
               <Drawer.Screen name="Klatka" component={Klatka} options={{title: 'KLATKA PIERSIOWA',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Plecy" component={Plecy} options={{title: 'PLECY',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Barki" component={Barki} options={{title: 'BARKI',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Biceps" component={Biceps} options={{title: 'BICEPS',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Triceps" component={Triceps} options={{title: 'TRICEPS',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Udaipos" component={Udaipos} options={{title: 'UDA I POŚLADKI',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Brzuch" component={Brzuch} options={{title: 'BRZUCH',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Lydki" component={Lydki} options={{title: 'ŁYDKI' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 
      
      </Drawer.Navigator>
     );
};
export default DrawerNavigator;