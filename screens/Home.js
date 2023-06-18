import { useNavigation } from "@react-navigation/native";
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable,Image} from 'react-native';
import { globalStyles } from "../styles/global";




export default function Home(props){
    const navigation = useNavigation();
    


    const pressHandler = () => {
        navigation.navigate('Pomiary');
    }

    const pressHandler2=()=>{
        navigation.navigate('Przypomnienia')
    }

    const pressHandler3=()=>{
        navigation.navigate('Stoper')
    }

    const pressHandler4=()=>{
        navigation.navigate('TwójTrening')
    }

    const pressHandler5=()=> {
        navigation.navigate('SpisĆwiczeń')
    }

    
  


    
    const { onPress, title = 'Monitorowanie wagi', title2='Przypomnienia', title3='Stoper', title4='Twój trening', title5='Zbiór Ćwiczeń' } = props;
    return (

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
   source={require('../assets/silownia_logo_2.png')}

        />
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


