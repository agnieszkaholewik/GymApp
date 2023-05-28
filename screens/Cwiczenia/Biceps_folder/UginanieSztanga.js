import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function UginanieSztanga(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Stań prosto z rozstawionymi stopami na szerokość bioder, trzymając sztangę w wyprostowanych rękach, dłonie skierowane do przodu.{'\n'}{'\n'}

2. Zachowaj prostą postawę, zarygluj mięśnie brzucha i utrzymaj lekko zgięte kolana.{'\n'}{'\n'}

3. Zacznij unoszenie sztangi, zginając ramiona w łokciach. Zachowaj stabilność tułowia i unikaj przechylania się do przodu.{'\n'}{'\n'}

4. Podczas unoszenia sztangi skieruj ją wzdłuż przedramion, starając się utrzymać łokcie blisko ciała.{'\n'}{'\n'}

5. Unoszenie kontynuuj, aż sztanga znajdzie się blisko górnej części klatki piersiowej lub ramion są w pełni zgięte w łokciach.{'\n'}{'\n'}

6. Delikatnie opuść sztangę, powoli prostując ramiona, aby wrócić do pozycji wyjściowej.{'\n'}{'\n'}
7.Powtarzaj ruch przez ustaloną liczbę powtórzeń, utrzymując równomierny rytm i kontrolę.
    </Text>
    
   </View>
 )
 }