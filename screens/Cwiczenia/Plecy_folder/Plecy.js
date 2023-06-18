import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Plecy(){
const navigation = useNavigation();



return (
   <View>


   
  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('WyciskaniePlecy')}>
    <Text style={globalStyles.text}>Wiosłowanie jednorącz</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Podciaganie')}>
    <Text style={globalStyles.text}>Podciąganie</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Facepull')}>
    <Text style={globalStyles.text}>Face Pull</Text>
  </Pressable>


  </View>
        
)
}