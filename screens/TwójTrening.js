import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, FlatList, TextInput } from 'react-native';
import { globalStyles } from "../styles/global";
import { AntDesign } from "@expo/vector-icons";
import tempData from "../tempData";
import TwojeTreningi from "../components/TwojeTreningi";
import Modal from "react-native-modal";





export default function TwójTrening(props) {

  const [lists, setLists] = useState(tempData);
  const [name, setName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
 


  const handleModal = () => setIsModalVisible(!isModalVisible);

  const navigation = useNavigation();

  const renderList = ({ item }) => {
    return <TwojeTreningi list={item} updateList={updateList} />
  }

  const addList = (list) => {
    setLists([
      ...lists,
      { ...list, id: lists.length + 1, todos: [] }
    ]);
  };

  const updateList = (list) => {
    setLists(lists.map(item=>{
        return item.id===list.id ? list : item
    }));
  }

  return (
    <View>
      <Modal animationType="slide" isVisible={isModalVisible} backdropColor="white" transparent={false}>
        <Pressable style={{ left: 300, bottom: 270 }} onPress={handleModal}>
          <AntDesign name="close" size={30} color='black' />
        </Pressable>
        <View>
          <TextInput style={globalStyles.input} placeholder="Nazwa Treningu"
            onChangeText={text => setName(text)} value={name} placeholderTextColor='lightgrey' />
        </View>
        <Pressable style={globalStyles.button1} onPress={() => { addList({ name }); setName(''); handleModal(); }}>
          <Text style={globalStyles.text}>DODAJ TRENING</Text>
        </Pressable>
      </Modal>
      


      <Pressable style={globalStyles.button} onPress={handleModal}>
        <Text style={globalStyles.text}>STWÓRZ NOWY TRENING</Text>
        <AntDesign name="plus" size={20} color='black' />
      </Pressable>

      <View style={{ justifyContent: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 16, fontWeight: 'bold', color: 'black', marginLeft: 25 }}>TWOJE TRENINGI:</Text>
        <FlatList data={lists} keyExtractor={item => item.name} vertical={true} showsVerticalScrollIndicator={false} renderItem={renderList} keyboardShouldPersistTaps="always"/>
      </View>
    </View>
  );
}
