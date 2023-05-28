import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function PrzysiadyKlasyczne(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Stój prosto, stopy umieść nieco szerzej niż szerokość bioder, z palcami stóp skierowanymi lekko na zewnątrz.{'\n'}{'\n'}

2. Unieś ręce i wyprostuj je przed siebie, aby utrzymać równowagę lub złap sztangę lub obciążenie na wysokości klatki piersiowej.{'\n'}{'\n'}

3. Zachowując prostą postawę, zginaj kolana i opuść się w dół, tak aby dolne uda były równoległe do podłogi lub nieco niżej.{'\n'}{'\n'}

4. Staraj się utrzymać kolana nad stopami, unikając ich skierowania do środka lub na zewnątrz.{'\n'}{'\n'}

5. Podczas zginania kolan unikaj nadmiernego przechylania tułowia do przodu. Zachowaj prosty kręgosłup i lekko zarygluj mięśnie brzucha.{'\n'}{'\n'}

6. Po osiągnięciu pełnego zgięcia kolan, napięciem mięśni nóg i pośladków unosząc się do pozycji wyjściowej.{'\n'}{'\n'}
7. Wykonaj ustaloną liczbę powtórzeń, utrzymując równomierny rytm i kontrolę nad ruchem.

    </Text>
    
   </View>
 )
 }