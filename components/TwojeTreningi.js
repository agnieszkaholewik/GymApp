import React from "react";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { globalStyles } from "../styles/global";
import TodoModal from "./TodoModal";
import tempData from "../tempData";

export default class TwojeTreningi extends React.Component{
    
    state={
        showListVisible:false,
        
    }
    toggleListModal(){
        this.setState({showListVisible: !this.state.showListVisible})
    }

    render(){
        const list =this.props.list

        const count=list.todos.filter(todo=>todo.title).length;

        return(
            <View>
            <Modal animationType="slide" visible={this.state.showListVisible} onRequestClose={()=>this.toggleListModal()}>
                <TodoModal list={list} closeModal={()=>this.toggleListModal()} updateList={this.props.updateList}/>
            </Modal>
                <Pressable style={globalStyles.button} onPress={()=>this.toggleListModal()}>
               <Text style={globalStyles.text} numberOfLines={1}>{list.name} </Text>
               <View style={{alignItems:"center"}}>
                <Text style={{marginTop:10}}>Ilość ćwiczeń: {count}</Text>
               </View>
            </Pressable>
            </View>
            
        )
    }
    
}