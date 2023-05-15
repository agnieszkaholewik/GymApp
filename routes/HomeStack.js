import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Spisćwiczeń from '../screens/SpisĆwiczeń';
import Pomiary from '../screens/Pomiary';
import Stoper from '../screens/Stoper';
import TwójTrening from '../screens/TwójTrening'
import Przypomnienia from '../screens/Przypomnienia';
import Klatka from '../screens/Cwiczenia/Klatka';



const Stack = createStackNavigator();
const HomeTabNavigator = () => {
    return (
      <View>
        {/* <Image source=""/> */}
        <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Ekran Startowy" component={Home} options={{title: 'Ekran startowy',headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               },}}/>
         <Stack.Screen name="SpisĆwiczeń" component={Spisćwiczeń} options={{title:'Zbiór ćwiczeń'}}/>
         <Stack.Screen name="Pomiary" component={Pomiary} options={{title:'Monitorowanie wagi'}}/>
         <Stack.Screen name="Stoper" component={Stoper} />
         <Stack.Screen name="TwójTrening" component={TwójTrening} options={{title:'Twój trening'}}/>
         <Stack.Screen name="Przypomnienia" component={Przypomnienia} />
         <Stack.Screen name="Klatka" component={Klatka} />
         </Stack.Navigator>
        </NavigationContainer>
        </View>
    );
};
export default HomeTabNavigator;

