import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Barki(){
const navigation = useNavigation();



return (
   <View>


   
 

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('FacePull')}>
    <Text style={globalStyles.text}>Shoulder Press </Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Odwodzenie')}>
    <Text style={globalStyles.text}>Odwodzenie ramion w bok ze sztangielkami</Text>
  </Pressable>

 
  </View>
        
)
}