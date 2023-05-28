import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import { globalStyles } from "../../../styles/global";
import { ScrollView } from "react-native-gesture-handler";

export default function UginanieKolano(){
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
   source={require('../../../assets/UginanieKolano.png')}

        />
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Weź hantel w jedną rękę i usiądź na ławce lub na krześle z nogami ustawionymi na szerokość bioder.{'\n'}{'\n'}

2. Oparcie przedramienia znajduje się na wewnętrznej stronie uda, tuż powyżej kolana. Trzymaj hantel pionowo, dłoń skierowaną ku górze.{'\n'}{'\n'}

3. Upewnij się, że łokieć jest ugięty i przylega do boku ciała, a nadgarstek jest w linii prostej z przedramieniem.{'\n'}{'\n'}

4. Zaczynając od pełnego wyprostu, zginaj przedramię, unosząc hantel w stronę ramienia.{'\n'}{'\n'}

5. Skoncentruj się na skurczu mięśni przedramienia, kontrolując ruch i unikając nadmiernego unoszenia łokcia.{'\n'}{'\n'}

6.Zatrzymaj się na chwilę na szczycie ruchu, czując napięcie w mięśniach przedramienia.{'\n'}{'\n'}
7.Powoli kontroluj ruch, opuszczając hantel z powrotem do pozycji wyjściowej.{'\n'}{'\n'}
8. Powtarzaj ruch przez ustaloną liczbę powtórzeń, utrzymując równomierny rytm i kontrolę.
    </Text>
    
   </View>
   </ScrollView>
 )
 }