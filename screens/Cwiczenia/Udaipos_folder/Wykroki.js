import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Wykroki(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Stój prosto z rozstawionymi stopami na szerokość bioder.{'\n'}{'\n'}

2. Jeśli chcesz, możesz trzymać sztangę lub obciążenie w dłoniach lub na plecach, aby zwiększyć intensywność ćwiczenia.{'\n'}{'\n'}

3. Wykonaj pierwszy krok naprzód, przesuwając jedną stopę w przód, tak aby kolano tworzyło kąt prosty.{'\n'}{'\n'}

4. Podczas wykonywania kroku w przód, upewnij się, że oba kolana są zgięte pod kątem prostym, a tył kolana zbliża się do podłogi.{'\n'}{'\n'}

5. Zachowaj równowagę i stabilność, utrzymując prostą postawę i unikając skręcania tułowia.{'\n'}{'\n'}

6. Przejdź do drugiego kroku, przesuwając stopę przednią z powrotem do pozycji wyjściowej.{'\n'}{'\n'}
7. Powtarzaj ruch przez ustaloną liczbę powtórzeń, wykonywując naprzemienne wykroki z obiema nogami.

    </Text>
    
   </View>
 )
 }