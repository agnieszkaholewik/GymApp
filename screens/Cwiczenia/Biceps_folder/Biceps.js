import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Biceps(){
const navigation = useNavigation();



return (
   <View>


   
  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('UginanieSztanga')}>
    <Text style={globalStyles.text}>Uginanie przedramion ze sztangą </Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('UginanieLinka')}>
    <Text style={globalStyles.text}>Uginanie przedramion z linką wyciągu dolnego oburącz</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Uginanie przedramienia ze sztangielką przez kolano</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Rozpietki')}>
    <Text style={globalStyles.text}>Wyciskanie hantla zza głowy siedząc</Text>
  </Pressable>

  </View>
        
)
}