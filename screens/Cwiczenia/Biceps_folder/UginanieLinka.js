import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function UginanieLinka(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Umieść linkę wyciągu dolnego na maszynie, używając odpowiedniego uchwytu.{'\n'}{'\n'}

2. Stój w odległości od wyciągu, tak aby ręce były wyprostowane i wyciąg był napięty.{'\n'}{'\n'}

3. Chwyć oburącz linkę wyciągu, trzymając ręce obok ciała, dłonie skierowane do siebie.{'\n'}{'\n'}

4. Zacznij ruch, zginając przedramiona w łokciach. Zachowaj stabilność tułowia i unikaj przechylania się do przodu.{'\n'}{'\n'}

5. Podczas uginania przedramion skieruj ruch wzdłuż przedramion, starając się utrzymać łokcie blisko ciała.{'\n'}{'\n'}

6.Uginanie kontynuuj, aż linka dotknie przedramion lub mięśnie przedramion są w pełni skontrahowane.{'\n'}{'\n'}
7.Delikatnie kontroluj ruch i powoli prostuj przedramiona, aby wrócić do pozycji wyjściowej, z zachowaniem napięcia mięśniowego.{'\n'}{'\n'}
8. Powtarzaj ruch przez ustaloną liczbę powtórzeń, utrzymując równomierny rytm i kontrolę.
    </Text>
    
   </View>
 )
 }