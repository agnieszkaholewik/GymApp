import React, { useState, useEffect } from 'react';
import { View, Text,  Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Pomiary() {
  const navigation = useNavigation();

  const [waga, setWaga] = useState('');
  const [wagi, setWagi] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@wagi');
      if (jsonValue !== null) {
        setWagi(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const zapiszWage = async () => {
    if (waga.trim() !== '') {
      const nowaWaga = {
        waga: waga,
        data: new Date().toLocaleString(),
      };
      setWagi([...wagi, nowaWaga]);
      setWaga('');
      try {
        await AsyncStorage.setItem('@wagi', JSON.stringify([...wagi, nowaWaga]));
        Keyboard.dismiss();
      } catch (e) {
        console.error(e);
      }
    }
  };
  const handleDeleteLastWeight = async () => {
    try {
      const savedWeights = await AsyncStorage.getItem('@wagi');
      let parsedWeights = JSON.parse(savedWeights);
  
      if (parsedWeights.length > 0) {
        parsedWeights.pop(); // remove last weight
        setWagi(parsedWeights);
        await AsyncStorage.setItem('@wagi', JSON.stringify(parsedWeights));
        Keyboard.dismiss();
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const chartData = {
    labels: wagi.map((waga) => waga.data),
    datasets: [
      {
        data: wagi.map((waga) => parseFloat(waga.waga)),
      },
    ],
  };

  return (
    <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 10 }}>
            <TextInput
                style={{ flex: 1, marginHorizontal: 10 }}
                mode="outlined"
                outlineColor='#008080'
                activeOutlineColor='#008080'
                label="Waga [kg]"
                keyboardType="numeric"
                value={waga}
                onChangeText={(text) => setWaga(text)}
            />
            <Button title="Dodaj wagę" onPress={zapiszWage} color="black" style={{}}/>
        </View>
        <Button
        title="Usuń ostatnią wagę"
        onPress={handleDeleteLastWeight}
        color="#FF6347"
        disabled={wagi.length == 0} />

        {wagi.length > 0 && (
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width}
          height={256}
          style={{marginTop:50, marginVertical:10, borderRadius:16}}
          yAxisLabel="kg "
          chartConfig={{
            backgroundColor: "white",
      
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
          bezier
        />
      )}
     
    </View>
  );
}
