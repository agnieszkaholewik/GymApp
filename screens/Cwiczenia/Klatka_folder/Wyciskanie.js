import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import { globalStyles } from "../../../styles/global";
import { ScrollView } from "react-native-gesture-handler";

export default function Wyciskanie(){
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
   source={require('../../../assets/WyciskanieKlatka.png')}

        />
 
    <Text style={globalStyles.excerciseText}>
    {'\n'}
     1. Zacznij, leżąc na ławce treningowej. Umieść stopy płasko na podłodze, a plecy, głowę i pośladki dobrze przylegają do ławki. Szczególnie ważne jest, aby dolna część pleców była dobrze podparta.{'\n'}{'\n'}

2. Chwyt sztangi szeroko, umieszczając dłonie nieco szerzej niż szerokość ramion. Palce powinny być skierowane w stronę stóp, a kciuki powinny otaczać sztangę.{'\n'}{'\n'}

3. Teraz unieś sztangę, prostując ramiona. Pamiętaj, aby unosić sztangę równolegle do podłogi i utrzymywać stabilną pozycję.{'\n'}{'\n'}

4. Zatrzymaj się, gdy sztanga znajdzie się na poziomie klatki piersiowej. W tej pozycji poczujesz napięcie w mięśniach klatki piersiowej i ramion.{'\n'}{'\n'}

5. Następnie, kontrolowanie ruchu, powoli opuść sztangę, zginając łokcie. Upewnij się, że sztanga opuszcza się w kontrolowany sposób, unikając nagłych ruchów.{'\n'}{'\n'}

6. Powtórz ten ruch, unosząc i opuszczając sztangę przez zadaną liczbę powtórzeń.
    </Text>
    
   </View>
   </ScrollView>
 )
 }