import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Barki(){
const navigation = useNavigation();



return (
   <View>


   
  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Arnoldki </Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Face Pull </Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Odwodzenie ramion w bok ze sztangielkami</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Cuban Press</Text>
  </Pressable>

  </View>
        
)
}