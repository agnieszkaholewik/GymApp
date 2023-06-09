import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import { globalStyles } from "../../../styles/global";
import { ScrollView } from "react-native-gesture-handler";

export default function Przysiady(){
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
   source={require('../../../assets/Przysiady2.png')}

        />
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
   source={require('../../../assets/Przysiady1.png')}

        />
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Znajdź stabilne podwyższenie, takie jak ławka treningowa, skrzynia lub klocek do ćwiczeń.{'\n'}{'\n'}

2. Stań tyłem do podwyższenia i postaw jedną stopę na nim, ze stopą zwróconą do przodu.{'\n'}{'\n'}

3. Przesuń stopę, która pozostaje na podłodze, do przodu na tyle, aby zachować równowagę i stabilność.{'\n'}{'\n'}

4. Utrzymując prostą postawę i stabilizując korpus, zginaj kolano i opuść się w dół, aż dolne udo i udo tworzą kąt prosty.{'\n'}{'\n'}

5. Staraj się utrzymać pionową linię od kolana do kostki w czasie zgięcia kolana.{'\n'}{'\n'}

6. Po osiągnięciu pełnego zgięcia, napięciem mięśni nóg i pośladków unosząc się do pozycji wyjściowej.{'\n'}{'\n'}
7. Wykonaj ustaloną liczbę powtórzeń dla jednej nogi, a następnie przejdź do drugiej nogi.

    </Text>
    
   </View>
   </ScrollView>
 )
 }