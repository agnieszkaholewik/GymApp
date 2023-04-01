import { useNavigation } from "@react-navigation/native";
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import { globalStyles } from "../styles/global";




export default function Home(props){
    const navigation = useNavigation();
    


    const pressHandler = () => {
        navigation.navigate('Pomiary');
    }

    const pressHandler2=()=>{
        navigation.navigate('SpisĆwiczeń')
    }

    const pressHandler3=()=>{
        navigation.navigate('Stoper')
    }

    const pressHandler4=()=>{
        navigation.navigate('TwójTrening')
    }

    const pressHandler5=()=> {
        navigation.navigate('Przypomnienia')
    }

    
    const { onPress, title = 'Monitorowanie wagi', title2='Zbiór Ćwiczeń', title3='Stoper', title4='Twój trening', title5='Przypomnienia' } = props;
    return (

      
        <View>
      
        <Pressable style={globalStyles.button} onPress={pressHandler2}>
      <Text style={globalStyles.text}>{title2} </Text>
    </Pressable>

    <Pressable style={globalStyles.button} onPress={pressHandler3}>
      <Text style={globalStyles.text}>{title3} </Text>
    </Pressable>

        <Pressable style={globalStyles.button} onPress={pressHandler}>
      <Text style={globalStyles.text}>{title} </Text>
    </Pressable>

    <Pressable style={globalStyles.button} onPress={pressHandler4}>
      <Text style={globalStyles.text}>{title4} </Text>
    </Pressable>

    <Pressable style={globalStyles.button} onPress={pressHandler5}>
      <Text style={globalStyles.text}>{title5} </Text>
    </Pressable>

    </View>
    )

    
}


