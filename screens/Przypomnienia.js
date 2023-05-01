import React, { useState } from 'react';
import { View, Text, FlatList,  Button, Platform, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { TextInput } from 'react-native-paper';

export default function App() {
  const [notifications, setNotifications] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addNotification = async () => {
    const identifier = new Date().getTime().toString(); 
    const trigger = date.getTime() - new Date().getTime(); 
    const notificationContent = {
      title,
      body: description,
      data: { identifier },
    };
    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: { seconds: trigger / 1000 },
    });
    const newNotification = {
      id: identifier,
      title,
      description,
      date: date.toLocaleString(),
    };
    setNotifications([...notifications, newNotification]);
    setTitle('');
    setDescription('');
    setDate(new Date());
  };

  const removeNotification = async (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
    await Notifications.cancelScheduledNotificationAsync(id);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    setDate(selectedDate || date);
  };

  const renderItem = ({ item }) => (
    <View style={{ borderBottomWidth: 2, paddingVertical: 5 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.date}</Text>
      <Button title="Usuń" onPress={() => removeNotification(item.id)} color="black"/>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 30 }}>
    
      <TextInput
      mode="outlined"
      outlineColor='#008080'
      activeOutlineColor='#008080'
    
        label="Tytuł"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.text}
      />
      <TextInput
      mode="outlined"
      outlineColor='#008080'
      activeOutlineColor='#008080'
    
        label="Opis"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.text}
       
      />

      <Button title="Wybierz date" onPress={showDatepicker} style={styles.button} color="black"/>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
          style={styles.czasdata}
        />
      )}
      <Button title="Dodaj" onPress={addNotification} style={styles.button} color="black"/>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
text: {
 

},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: 1, 
  marginBottom: 10,
  marginTop: 15,
  borderWidth: 2,
  borderColor: 'blue',
  backgroundColor: 'blue',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 5,
  color: 'black'
},
buttonText: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 16,
},
czasdata: {
  justifyContent: 'center',
  width: 260,
  marginTop: 10,
  paddingRight:50
},
delete: {

}
});