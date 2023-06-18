import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function HipThrust(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Rozpocznij od pozycji siedzącej na podłodze z plecami opartymi o ławeczkę lub podobne podwyższenie.{'\n'}{'\n'}

2. Umieść stopy płasko na podłodze, nieco szerzej niż szerokość bioder, z kolanami zgłębionymi.{'\n'}{'\n'}

3. Opuść biodra w dół, a następnie napięciem mięśni pośladkowych unosząc je do góry, aż do osiągnięcia linii prostej między kolanami, biodrami i ramionami.{'\n'}{'\n'}

4. Zwróć uwagę na utrzymanie prostej linii od kolan przez biodra do barków podczas unoszenia bioder.{'\n'}{'\n'}

5. Na górze ćwiczenia, zaciskając pośladki, zatrzymaj się na chwilę, a następnie powoli opuść biodra z powrotem na dół.{'\n'}{'\n'}

6. Powtarzaj ruch przez ustaloną liczbę powtórzeń, utrzymując kontrolę i równomierny rytm.{'\n'}{'\n'}

    </Text>
    
   </View>
 )
 }