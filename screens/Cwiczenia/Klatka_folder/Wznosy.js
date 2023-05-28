import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";
import { ScrollView } from "react-native-gesture-handler";

export default function Wznosy(){
const navigation = useNavigation();
return (
    <ScrollView>
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Zacznij, stojąc naprzeciwko maszyny wyciągu dolnego. Ustaw dźwignię na niskiej pozycji, tak aby rączki wyciągu znajdowały się na wysokości ud.{'\n'}{'\n'}

2. Stań w lekkim rozkroku, aby zapewnić stabilność. Uchwyć rączki wyciągu dolnego, trzymając je wyciągnięte przed sobą, dłonie skierowane w dół i szerokość chwytu trochę większa niż szerokość ramion.{'\n'}{'\n'}

3. Początkowa pozycja to ręce opuszczone z lekkim skrzyżowaniem przed sobą.{'\n'}{'\n'}

4. Następnie, kontrolując ruch i napinając mięśnie ramion, unieś ręce na boki, prowadząc wyciąg w górę do poziomu barków. Staraj się utrzymać stabilną pozycję ciała i unikaj nadmiernego odchylenia w tył.{'\n'}{'\n'}

5. Zatrzymaj się na chwilę, gdy ramiona są na wysokości barków. Poczuj napięcie w mięśniach ramion.{'\n'}{'\n'}

6. Powoli opuść ręce, kontrolując ruch, aby wrócić do początkowej pozycji. {'\n'}{'\n'}

7. Powtórz ten ruch przez zadaną liczbę powtórzeń.
    </Text>
    
   </View>
   </ScrollView>
 )
 }