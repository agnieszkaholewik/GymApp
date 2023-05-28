import * as React from 'react';
import 'react-native-gesture-handler';
import Home from '../GymApp/screens/Home';
import Spisćwiczeń from '../GymApp/screens/SpisĆwiczeń';
import Pomiary from '../GymApp/screens/Pomiary';
import Stoper from '../GymApp/screens/Stoper'
import TwójTrening from '../GymApp/screens/TwójTrening';
import Przypomnienia from '../GymApp/screens/Przypomnienia';
import Plecy from './screens/Cwiczenia/Plecy_folder/Plecy';
import Barki from './screens/Cwiczenia/Barki_folder/Barki';

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Klatka from './screens/Cwiczenia/Klatka_folder/Klatka';
import Biceps from './screens/Cwiczenia/Biceps_folder/Biceps';
import Triceps from './screens/Cwiczenia/Triceps_folder/Triceps';
import Udaipos from './screens/Cwiczenia/Udaipos_folder/Udaipos';
import Brzuch from './screens/Cwiczenia/Brzuch_folder/Brzuch';
import Lydki from './screens/Cwiczenia/Lydki_folder/Lydki';
import Rozpietki from './screens/Cwiczenia/Klatka_folder/Rozpietki';
import Wyciskanie from './screens/Cwiczenia/Klatka_folder/Wyciskanie';
import Wznosy from './screens/Cwiczenia/Klatka_folder/Wznosy';
import Pompki from './screens/Cwiczenia/Klatka_folder/Pompki';
import HipThrust from './screens/Cwiczenia/Udaipos_folder/HipThrust';
import Przysiady from './screens/Cwiczenia/Udaipos_folder/Przysiady';
import PrzysiadyKlasyczne from './screens/Cwiczenia/Udaipos_folder/PrzysiadyKlasyczne';
import MartwyCiag from './screens/Cwiczenia/Udaipos_folder/MartwyCiag';
import Wykroki from './screens/Cwiczenia/Udaipos_folder/Wykroki';
import Wchodzenie from './screens/Cwiczenia/Udaipos_folder/Wchodzenie';
import UginanieSztanga from './screens/Cwiczenia/Biceps_folder/UginanieSztanga';
import UginanieLinka from './screens/Cwiczenia/Biceps_folder/UginanieLinka';
import FacePull from './screens/Cwiczenia/Barki_folder/FacePull';
import Odwodzenie from './screens/Cwiczenia/Barki_folder/Odwodzenie';
import Plank from './screens/Cwiczenia/Brzuch_folder/Plank';
import Rowerek from './screens/Cwiczenia/Brzuch_folder/Rowerek';
import UginanieKolano from './screens/Cwiczenia/Biceps_folder/UginanieKolano';
import WyciskanieBiceps from './screens/Cwiczenia/Biceps_folder/WyciskanieBiceps';
import WyciskanieTriceps from './screens/Cwiczenia/Triceps_folder/WyciskanieTriceps';
import WyciskaniePlecy from './screens/Cwiczenia/Plecy_folder/WyciskaniePlecy';
import Podciaganie from './screens/Cwiczenia/Plecy_folder/Podciaganie';
import Facepull from './screens/Cwiczenia/Plecy_folder/Facepull';


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

               <Drawer.Screen name="Rozpietki" component={Rozpietki} options={{title: 'Rozpiętki z hantlami' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Wyciskanie" component={Wyciskanie} options={{title: 'Wyciskanie sztangi' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Wznosy" component={Wznosy} options={{title: 'Wznosy ramion' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Pompki" component={Pompki} options={{title: 'Pompki na poręczach' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="HipThrust" component={HipThrust} options={{title: 'Hip thrusty' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Przysiady" component={Przysiady} options={{title: 'Przysiady bułgarskie' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

                <Drawer.Screen name="PrzysiadyKlasyczne" component={PrzysiadyKlasyczne} options={{title: 'Przysiady klasyczne' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

                <Drawer.Screen name="MartwyCiag" component={MartwyCiag} options={{title: 'Rumuński martwy ciąg' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Wykroki" component={Wykroki} options={{title: 'Wykroki' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

                <Drawer.Screen name="Wchodzenie" component={Wchodzenie} options={{title: 'Wchodzenie na podwyższenie' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="UginanieSztanga" component={UginanieSztanga} options={{title: 'Uginanie przedramion ze sztangielkami' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="UginanieLinka" component={UginanieLinka} options={{title: 'Uginanie przedramion z linką wyciągu dolnego oburącz' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="FacePull" component={FacePull} options={{title: 'Face Pull' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Odwodzenie" component={Odwodzenie} options={{title: 'Odwodzenie ramion w bok ze sztangielkami' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Plank" component={Plank} options={{title: 'Plank' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Rowerek" component={Rowerek} options={{title: 'Rowerek' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="UginanieKolano" component={UginanieKolano} options={{title: 'Uginanie przedramienia ze sztangielką przez kolano' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="WyciskanieBiceps" component={WyciskanieBiceps} options={{title: 'Wyciskanie hantla zza głowy siedząc' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="WyciskanieTriceps" component={WyciskanieTriceps} options={{title: 'Wyciskanie jednorączkowe hantla na triceps ' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="WyciskaniePlecy" component={WyciskaniePlecy} options={{title: 'Wiosłowanie jednorącz ' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 

               <Drawer.Screen name="Podciaganie" component={Podciaganie} options={{title: 'Podciąganie ' ,headerStyle: {
                 backgroundColor: '#008080', 
               },headerTitleStyle: {
                 fontWeight: 'bold',
                 color:'white',
                 
               }, drawerLabel:''}}/> 
      
      </Drawer.Navigator>
     );
};
export default DrawerNavigator;