import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Pompki(){
const navigation = useNavigation();
return (
    <View>
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Znajdź stabilne poręcze, takie jak poręcze treningowe lub poręcze na placu zabaw. Upewnij się, że poręcze są wystarczająco mocne i stabilne, aby utrzymać twoją wagę.{'\n'}{'\n'}

2. Stań między poręczami, twarzą do przodu. Umieść dłonie na poręczach, tak aby były nieco szerzej niż szerokość ramion, a palce skierowane do przodu.{'\n'}{'\n'}

3. Unieś się na rękach, prostując ramiona. Pamiętaj, aby utrzymać stabilną pozycję ciała, napinając mięśnie brzucha i napięcie w mięśniach klatki piersiowej.{'\n'}{'\n'}

4. Zginij łokcie, opuszczając ciało w dół, aż klatka piersiowa znajdzie się na poziomie poręczy. Ruch powinien być kontrolowany i płynny.{'\n'}{'\n'}

5. Zatrzymaj się na chwilę, gdy jesteś na najniższym punkcie pompki. Poczuj napięcie w mięśniach klatki piersiowej i ramion.{'\n'}{'\n'}

6. Następnie, wykorzystując mięśnie klatki piersiowej i ramion, wypchnij ciało w górę, prostując łokcie. Kontynuuj ruch, aż wrócisz do pozycji wyjściowej.{'\n'}{'\n'}
7. Powtórz ten ruch przez zadaną liczbę powtórzeń.
    </Text>
    
   </View>
 )
 }