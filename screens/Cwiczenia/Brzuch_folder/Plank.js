import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Plank(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Połóż się na podłodze, na brzuchu.{'\n'}{'\n'}

2. Utwórz podporę na przedramionach, składając łokcie pod kątem 90 stopni i umieszczając je bezpośrednio pod barkami.{'\n'}{'\n'}

3. Unieś ciało, podpierając się na przedramionach i palcach stóp.{'\n'}{'\n'}

4. Upewnij się, że ciało tworzy prostą linię od głowy do pięt.{'\n'}{'\n'}

5. Napnij mięśnie brzucha, aby utrzymać stabilną pozycję.{'\n'}{'\n'}

6. Unikaj unoszenia bioder lub opuszczania miednicy - zachowaj równomierne napięcie w całym ciele.{'\n'}{'\n'}
7.Skoncentruj się na równomiernym oddychaniu podczas utrzymania pozycji.{'\n'}{'\n'}
8. Zacznij od trzymania pozycji przez 20-30 sekund, stopniowo zwiększając czas w miarę postępu.
    </Text>
    
   </View>
 )
 }