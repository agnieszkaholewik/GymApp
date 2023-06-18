import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, ScrollView,Image, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";
import zdj1 from '../../../assets/WyciskaniePlecy1.png';
import zdj2 from '../../../assets/WyciskaniePlecy2.png';


export default function WyciskaniePlecy(){
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
    source={zdj2}

            />
    <Text style={globalStyles.text}>
    {'\n'}
1. Usiądź na ławeczce treningowej, trzymając hantlę w jednej ręce. {'\n'}{'\n'}

2. Połóż przedramię na ławeczce, tak aby górna część ręki była oparta na podparciu, a ręka swobodnie zwisała na zewnątrz ławeczki.{'\n'}{'\n'}

3. Wyprostuj plecy, unieś klatkę piersiową i utrzymuj lekko zgięte kolana.{'\n'}{'\n'}

4. Zacznij ruch, zginając ramię i unosząc hantlę w stronę tułowia. Wykorzystaj ruch ramienia i mięśni pleców, aby podciągnąć hantlę w górę.{'\n'}{'\n'}

5. Skoncentruj się na skurczu mięśni pleców podczas unoszenia hantli. Wykonaj ruch kontrolowanie, unikając szarpania.{'\n'}{'\n'}

6. Gdy hantla dotknie tułowia lub mięśnie pleców są w pełni skontrahowane, delikatnie kontroluj ruch i powoli opuść hantlę w dół do pozycji wyjściowej.{'\n'}{'\n'}
7. Powtórz ruch dla ustalonej liczby powtórzeń, utrzymując równomierny rytm i kontrolę.{'\n'}{'\n'}
8. Następnie powtórz ćwiczenie z drugą ręką.
    </Text>
    
   </View>
   </ScrollView>
 )
 }