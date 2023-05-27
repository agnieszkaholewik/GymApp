import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Pressable, Button} from 'react-native';
import { globalStyles } from "../styles/global";

const SpisĆwiczeń = ({ navigation }) => {
  


  return (


<View>
 
  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Klatka')}>
    <Text style={globalStyles.text}>KLATKA PIERSIOWA</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Plecy')}>
    <Text style={globalStyles.text}>PLECY</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Barki')}>
    <Text style={globalStyles.text}>BARKI</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Biceps')}>
    <Text style={globalStyles.text}>BICEPS</Text>
  </Pressable>
 
  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Triceps')}>
    <Text style={globalStyles.text}>TRICEPS</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Udaipos')}>
    <Text style={globalStyles.text}>UDA I POŚLADKI</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Brzuch')}>
    <Text style={globalStyles.text}>BRZUCH</Text>
  </Pressable>

  <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Lydki')}>
    <Text style={globalStyles.text}>ŁYDKI</Text>
  </Pressable>
</View>
)
}

export default SpisĆwiczeń;










