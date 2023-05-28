import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";
import HipThrust from "./HipThrust";

export default function Udaipos(){
const navigation = useNavigation();



return (
   <View>


   
  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('HipThrust')}>
    <Text style={globalStyles.text}>Hip thrust</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Przysiady')}>
    <Text style={globalStyles.text}>Przysiady bułgarskie </Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('PrzysiadyKlasyczne')}>
    <Text style={globalStyles.text}>Przysiady klasyczne</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('MartwyCiag')}>
    <Text style={globalStyles.text}>Rumuński martwy ciąg</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Wykroki')}>
    <Text style={globalStyles.text}>Wykroki</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Wchodzenie')}>
    <Text style={globalStyles.text}>Wchodzenie na podwyższenie</Text>
  </Pressable>


  </View>
        
)
}