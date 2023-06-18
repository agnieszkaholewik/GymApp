import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import { globalStyles } from "../../../styles/global";
import { ScrollView } from "react-native-gesture-handler";

export default function WyciskanieBiceps(){
const navigation = useNavigation();
return (
    <ScrollView>
    <View>
    <Image  
       style={{ width: 210,
    height: 190,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:20
   }}
   source={require('../../../assets/WyciskanieBiceps.png')}

        />
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Usiądź na ławce z oparciem, trzymając hantel w jednej ręce.{'\n'}{'\n'}

2. Przytrzymaj hantel za głową, unieś łokcie, aby były skierowane w górę, a przedramię w linii prostej z nadgarstkiem.{'\n'}{'\n'}

3. Upewnij się, że stopy są stabilnie ustawione na podłodze, a plecy są proste i dobrze podparte.{'\n'}{'\n'}

4. Wykonaj głęboki wdech i napnij mięśnie brzucha, aby utrzymać stabilną postawę.{'\n'}{'\n'}

5. Wyprostuj ręce, unosząc hantel do góry, jednocześnie zginając łokcie.{'\n'}{'\n'}

6.Unikaj zbyt dużego wygięcia pleców - utrzymaj naturalną krzywiznę kręgosłupa.{'\n'}{'\n'}
7.Zatrzymaj się na górze ruchu, gdy hantel jest blisko wyprostowanej pozycji, czując napięcie w mięśniach ramion i barków.{'\n'}{'\n'}
8. Powoli kontroluj ruch, opuszczając hantel z powrotem za głowę do pozycji wyjściowej.
    </Text>
    
   </View>
   </ScrollView>
 )
 }