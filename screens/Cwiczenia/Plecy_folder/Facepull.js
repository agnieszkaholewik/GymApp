import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, ScrollView,Image, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";
import zdj1 from './../../../assets/Facepull.png';



export default function Facepull(){
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
    source={zdj1}

            />
            
  
    <Text style={globalStyles.text}>
    {'\n'}
1. Skocz do przodu na stojącej pozycji, trzymając w każdej ręce linkę wyciągu dolnego z odpowiednim uchwytem. {'\n'}{'\n'}

2. Ustaw wyciąg dolny na wysokości klatki piersiowej.{'\n'}{'\n'}

3. Zatacz krok do przodu, tak aby twoje stopy były stabilne, a kolana lekko zgięte.{'\n'}{'\n'}

4. Chwyć linkę wyciągu, trzymając dłonie skierowane do siebie, blisko siebie.{'\n'}{'\n'}

5. Wyprostuj ramiona przed sobą na wysokość barków.{'\n'}{'\n'}

6. Zegnij łokcie i rozszerz ramiona, przyciągając linkę wyciągu w kierunku twarzy. Unikaj przesadnego unoszenia łokci.{'\n'}{'\n'}
7. Podczas przyciągania linki wyciągu, skup się na ściąganiu łopatek do siebie, poczując napięcie w mięśniach pleców i ramion.{'\n'}{'\n'}
8. W momencie, gdy linka dotyka twarzy lub jesteś w pełnym skurczu mięśniowym, delikatnie kontroluj ruch i powoli rozciągaj ramiona, aby wrócić do pozycji wyjściowej.
    </Text>
    
   </View>
   </ScrollView>
 )
 }