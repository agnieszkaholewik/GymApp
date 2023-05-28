import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Brzuch(){
const navigation = useNavigation();



return (
   <View>


   


  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Plank</Text>
  </Pressable>

  

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Skosy </Text>
  </Pressable>



  </View>
        
)
}