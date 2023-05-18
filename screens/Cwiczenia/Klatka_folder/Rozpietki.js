import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Rozpietki(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Zaczynając, weź hantle w obie ręce i połóż się na ławce treningowej. Umieść stopy płasko na podłodze i połóż się na plecach, trzymając hantle nad klatką piersiową, przedramiona skierowane do góry.{'\n'}{'\n'}

2. Następnie, zgiń łokcie, opuszczając hantle na boki, tak aby tworzyły one kąt około 90 stopni z twoim ciałem. Ruch powinien być kontrolowany i płynny.{'\n'}{'\n'}

3. Zatrzymaj się na chwilę, gdy hantle znajdą się blisko podłogi, a twoje ramiona będą równoległe do podłogi. W tym momencie poczujesz napięcie w mięśniach klatki piersiowej i ramion.{'\n'}{'\n'}

4. Następnie, wykorzystując mięśnie klatki piersiowej i ramion, zacznij unoszenie hantli z powrotem do pozycji wyjściowej, powoli zwiększając napięcie mięśniowe.{'\n'}{'\n'}

5. Kontynuuj wykonywanie rozpiętek, powtarzając ten ruch przez zadaną liczbę powtórzeń.{'\n'}


    </Text>
    
   </View>
 )
 }