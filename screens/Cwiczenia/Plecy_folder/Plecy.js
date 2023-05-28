import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Plecy(){
const navigation = useNavigation();



return (
   <View>


   
  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Lat Pulldown </Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Face Pull </Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Podciąganie </Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Wyciskanie jednorącz</Text>
  </Pressable>

  </View>
        
)
}