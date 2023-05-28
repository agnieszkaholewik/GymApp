import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, ScrollView,Image, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";
import zdj1 from '../../../assets/WyciskanieTriceps1.png';
import zdj2 from '../../../assets/WyciskanieTriceps2.png';


export default function WyciskanieTriceps(){
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
1. Usiądź na ławce treningowej, trzymając jednorączkę hantla w jednej ręce. {'\n'}{'\n'}

2. Umieść stopy płasko na podłodze i wyprostuj plecy.{'\n'}{'\n'}

3. Unieś hantlę nad głowę, prostując ramię. Dłonie powinny być skierowane do przodu.{'\n'}{'\n'}

4. Zegnij łokieć i powoli opuść hantlę za głowę, tak aby dosięgnęła środka pleców. Upewnij się, że przedramię pozostaje w pozycji pionowej.{'\n'}{'\n'}

5. Wyprostuj ramię i unieś hantlę z powrotem do pozycji wyjściowej nad głową.{'\n'}{'\n'}

6. Skup się na skurczu tricepsa podczas unoszenia hantli.{'\n'}{'\n'}
7. Kontynuuj wykonywanie powtórzeń dla ustalonej liczby serii i powtórzeń.{'\n'}{'\n'}
8. Następnie powtórz ćwiczenie z drugą ręką.
    </Text>
    
   </View>
   </ScrollView>
 )
 }