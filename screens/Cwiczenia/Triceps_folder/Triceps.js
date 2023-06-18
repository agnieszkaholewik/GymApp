import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { globalStyles } from "../../../styles/global";

export default function Triceps(){
const navigation = useNavigation();



return (
   <View>


   
  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('WyciskanieTriceps')}>
    <Text style={globalStyles.text}>Wyciskanie jednorączkowe hantla na triceps </Text>
  </Pressable>

 

 

  

  </View>
        
)
}