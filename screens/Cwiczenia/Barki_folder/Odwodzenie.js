import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import { globalStyles } from "../../../styles/global";
import { ScrollView } from "react-native-gesture-handler";


export default function Odwodzenie(){
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
   source={require('../../../assets/Wznosy.png')}

        />
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Stój prosto z rozstawionymi stopami na szerokość bioder.{'\n'}{'\n'}

2. Trzymaj hantle w obu rękach, dłonie skierowane w dół, tuż obok ud.{'\n'}{'\n'}

3. Wykonaj pierwszy krok naprzód, przesuwając jedną stopę w przód, tak aby kolano tworzyło kąt prosty.{'\n'}{'\n'}

4. Zacznij ruch, unosząc hantle bokiem do góry, trzymając ramiona proste.{'\n'}{'\n'}

5. Podczas unoszenia hantli, skoncentruj się na pracujących mięśniach bocznych barków.{'\n'}{'\n'}

6.Zatrzymaj się, gdy hantle są na wysokości barków lub gdy czujesz maksymalne skurczenie mięśni.{'\n'}{'\n'}
7.Powoli kontroluj ruch, opuszczając hantle z powrotem do pozycji wyjściowej, stopniowo rozpuszczając napięcie mięśniowe.{'\n'}{'\n'}
8. Powtarzaj ruch przez ustaloną liczbę powtórzeń, utrzymując równomierny rytm i kontrolę.

    </Text>
    
   </View>
   </ScrollView>
 )
 }