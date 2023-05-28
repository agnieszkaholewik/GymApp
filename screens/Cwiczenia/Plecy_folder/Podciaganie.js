import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, ScrollView,Image, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";
import zdj1 from '../../../assets/Podciaganie1.png';
import zdj2 from '../../../assets/Podciaganie2.png';


export default function Podciaganie(){
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
1. Przejdź do drążka lub poręczy o odpowiedniej wysokości.{'\n'}{'\n'}

2. Chwyć drążek szeroko, trzymając go kciukiem z przodu i palcami z tyłu (chwyt pronowany) lub z tyłu i palcami z przodu (chwyt supinowany).{'\n'}{'\n'}

3. Zegnij ramiona w łokciach, zawieszając się na drążku. Nogi powinny być zgięte w kolanach, a stopy uniesione lub oparte na podpórce.{'\n'}{'\n'}

4. Wyprostuj plecy, unieś klatkę piersiową i skup się na utrzymaniu napięcia w mięśniach brzucha.{'\n'}{'\n'}

5. Zacznij ruch, unosząc ciało do góry, napinając mięśnie pleców i ramion. Unikaj używania nóg do pomocy w podciąganiu.{'\n'}{'\n'}

6. Kontynuuj unoszenie ciała aż do momentu, gdy broda jest powyżej wysokości drążka lub poręczy.{'\n'}{'\n'}
7. Zatrzymaj się na chwilę w górnym punkcie, skoncentruj się na skurczu mięśni pleców.{'\n'}{'\n'}
8. Powoli opuść się, kontrolując ruch i wracając do pozycji wyjściowej, zawieszając się na drążku.
    </Text>
    
   </View>
   </ScrollView>
 )
 }