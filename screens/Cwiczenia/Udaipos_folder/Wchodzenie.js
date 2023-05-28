import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Wchodzenie(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1.Znajdź stabilne podwyższenie, takie jak ławka treningowa, skrzynia lub stopień schodów.{'\n'}{'\n'}

2. Stań przed podwyższeniem, stopy ustaw szerokość bioder.{'\n'}{'\n'}

3. Unieś jedną stopę i postaw ją na podwyższeniu, mocując ją na środku stopą lub piętą.{'\n'}{'\n'}

4. Naciskając na stopę, unosząc się, przenieś swoją wagę na stopę na podwyższeniu.{'\n'}{'\n'}

5. Podczas unoszenia się, zgiń drugą nogę w kolanie, unosząc ją ku górze w kierunku podwyższenia.{'\n'}{'\n'}

6. Kontynuuj unoszenie się, aż obie nogi znajdą się na podwyższeniu.{'\n'}{'\n'}
7. Teraz zaczynając schodzić, zegnij jedną nogę w kolanie, opuszczając ją w dół na podłogę.{'\n'}{'\n'}
8. Podczas schodzenia z drugą nogą, utrzymaj kontrolę i równowagę, unikając nagłych ruchów.

    </Text>
    
   </View>
 )
 }