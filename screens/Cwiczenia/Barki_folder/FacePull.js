import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function FacePull(){
const navigation = useNavigation();
return (
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
   source={require('../../../assets/ShoulderPress.png')}

        />
 
    <Text style={globalStyles.text}>
    {'\n'}
    1. Usiądź na ławce, która jest specjalnie zaprojektowana do ćwiczeń z dźwigniami (leverage) lub na ławce z regulowanymi podporami dla rąk.{'\n'}{'\n'}

2. Dostosuj ustawienie oparcia tak, aby twoje plecy były wygodnie podparte, a stopy mocno oparte na podłodze.{'\n'}{'\n'}

3.Umieść dźwignię na wysokości klatki piersiowej, tak aby była dostępna do chwytu.{'\n'}{'\n'}

4. Chwyć dźwignię oburącz, dłonie skierowane do przodu, na wysokości barków lub nieco wyżej.{'\n'}{'\n'}

5. Wypchnij dźwignię do góry, prostując ramiona, ale nie blokuj ich w pełni. Utrzymaj kontrolę nad ruchem.{'\n'}{'\n'}

6.Oprowadź dźwignię w dół, kontrolując opadanie, aby uniknąć nadmiernego naprężania mięśni.{'\n'}{'\n'}


    </Text>
    
   </View>
 )
 }