import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function MartwyCiag(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Stój prosto z rozstawionymi stopami na szerokość bioder, trzymając sztangę lub obciążenie na wysokości bioder przed sobą.{'\n'}{'\n'}

2. Skieruj palce stóp lekko na zewnątrz lub utrzymaj je równolegle, w zależności od preferencji.{'\n'}{'\n'}

3. Wyprostuj plecy, zarygluj mięśnie brzucha i utrzymaj lekko zgięte kolana.{'\n'}{'\n'}

4. Zaczynając ruch biodrami, przesuń sztangę lub obciążenie w dół, utrzymując nogi i kolana w stałej pozycji.{'\n'}{'\n'}

5. Podczas opuszczania obciążenia skieruj je wzdłuż nóg, zginając biodra i utrzymując prosty kręgosłup.{'\n'}{'\n'}

6. Opuszczaj sztangę, aż osiągniesz początkową pozycję, w której dolna część pleców jest lekko zaokrąglona, ale nie przekracza horyzontalnej linii.{'\n'}{'\n'}
7. Napięciem mięśni nóg i pośladków unosząc biodra, wyprostuj się, unosząc obciążenie do góry.

    </Text>
    
   </View>
 )
 }