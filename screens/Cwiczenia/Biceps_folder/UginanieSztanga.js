import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function UginanieSztanga(){
const navigation = useNavigation();
return (
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
   source={require('../../../assets/UginanieSztanga.png')}

        />
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Stań prosto z rozstawionymi stopami na szerokość bioder, trzymając sztangę w wyprostowanych rękach, dłonie skierowane do przodu.{'\n'}{'\n'}

2. Zachowaj prostą postawę, zarygluj mięśnie brzucha i utrzymaj lekko zgięte kolana.{'\n'}{'\n'}

3. Zacznij unoszenie sztangielek, zginając ramiona w łokciach. Zachowaj stabilność tułowia i unikaj przechylania się do przodu.{'\n'}{'\n'}

4. Podczas unoszenia sztangielek skieruj je wzdłuż przedramion, starając się utrzymać łokcie blisko ciała.{'\n'}{'\n'}

5. Unoszenie kontynuuj, aż sztangielki znajdą się blisko górnej części klatki piersiowej lub ramion są w pełni zgięte w łokciach.{'\n'}{'\n'}

6. Delikatnie opuść sztangielki, powoli prostując ramiona, aby wrócić do pozycji wyjściowej.{'\n'}{'\n'}
7.Powtarzaj ruch przez ustaloną liczbę powtórzeń, utrzymując równomierny rytm i kontrolę.
    </Text>
    
   </View>
 )
 }