import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Rowerek(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Połóż się na plecach na podłodze, zgięte kolana uniesione do klatki piersiowej, stopy unoszone nad podłogę.{'\n'}{'\n'}

2. Umieść dłonie za głową, palce splecione, lub umieść je na bokach ciała.{'\n'}{'\n'}

3.Napnij mięśnie brzucha i unieś górną część pleców, odrywając barki od podłogi.{'\n'}{'\n'}

4. Skieruj prawe kolano w kierunku lewego łokcia, jednocześnie prostując lewą nogę na zewnątrz.{'\n'}{'\n'}

5. Wykonaj ruch podobny do pedałowania, prostując prawą nogę i jednocześnie zginając lewą nogę i skierowując lewe kolano w kierunku prawego łokcia.{'\n'}{'\n'}

6.Kontynuuj ruch naprzemienny, jakbyś pedałował na rowerze, unosząc jedno kolano i skręcając tors.{'\n'}{'\n'}

    </Text>
    
   </View>
 )
 }