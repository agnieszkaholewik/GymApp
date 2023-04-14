import React from "react";
import {View, Text, StyleSheet, SafeAreaView, Pressable, KeyboardAvoidingView, TextInput, Keyboard, Animated, TouchableOpacity} from "react-native"
import { globalStyles } from "../styles/global";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FlatList, Swipeable } from "react-native-gesture-handler";


export default class TodoModal extends React.Component{
    state={
        newTodo:""
    
    };

    

    toggleTodoCompleted=index=>{
        let list = this.props.list
        list.todos[index].completed = !list.todos[index].completed;
        this.props.updateList(list);
    };

    addTodo=()=>{
        let list=this.props.list

        if(!list.todos.some(todo=>todo.title==this.state.newTodo)){
            list.todos.push({title:this.state.newTodo, completed:false})
            this.props.updateList(list)
        }

        
        
        
        this.setState({newTodo:""})

        Keyboard.dismiss();
    };

    deleteTodo = index => {
        let list =this.props.list
        list.todos.splice(index, 1)
        
        this.props.updateList(list)
    }

    renderTodo=(todo, index)=> {
        return(
            <Swipeable renderRightActions={(_,dragX)=> this.rightActions(dragX, index)}>
            <View style={globalStyles.todoContainer}>
                <Pressable onPress={() => this.toggleTodoCompleted(index)} >
                    <Ionicons name={todo.completed ? "ios-square" : "ios-square-outline"} size={24} color='gray' style={{width:32}}/>
                </Pressable>
                <Text style={[globalStyles.todo, {textDecorationLine:todo.completed ? 'line-through' : 'none' ,color: todo.completed ? 'gray':'black' }]}>{todo.title} </Text>
            </View>
            </Swipeable>
        )
    }
rightActions=(dragX, index) => {
    const scale= dragX.interpolate({
        inputRange: [-100,0],
        outputRange: [1,0.9],
        extrapolate: "clamp"
    })

    const opacity=dragX.interpolate({
        inputRange: [-100,-20,0],
        outputRange: [1,0.9,0],
        extrapolate:"clamp"
    })

    return (
        <TouchableOpacity onPress={()=>this.deleteTodo(index)}>
            <Animated.View style={[globalStyles.deleteButton,{opacity:opacity}]}>
                <Animated.Text style={{color:'white', fontWeight:"800", transform: [{scale}] }}>
                    Usuń
                </Animated.Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

    render(){
        const list=this.props.list
        const count=list.todos.length
        const completedCount=list.todos.filter(todo=>todo.completed).length
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding">
            
            <SafeAreaView style={globalStyles.container}>
                <Pressable style={{position:"absolute", top:64, right:32, zIndex:10}} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={30} color='black'/>
                </Pressable>
                <View style={[globalStyles.section, globalStyles.header2, {borderBottomColor:'black'}]}>
                <View>
                    <Text style={globalStyles.title}>
                        {list.name}
                    </Text>
                    <Text style={globalStyles.taskCount}>
                        wykonano {completedCount} z {count} ćwiczeń
                    </Text>
                    </View>
                </View>
                <View style={[globalStyles.section, {flex:3, marginVertical:16}]}>
                    <FlatList data={list.todos} renderItem={({item, index})=>this.renderTodo(item, index)} keyExtractor={item=>item.title}  showsVerticalScrollIndicator={false}/>
                </View>

                <View style={[globalStyles.section, globalStyles.footer]} >
                     <TextInput  style={[globalStyles.input2, {borderColor:'black'}]} onChangeText={text=>this.setState({newTodo:text})} value={this.state.newTodo}/>
                    <Pressable style={[globalStyles.addTodo, {backgroundColor:"#afeeee"}]} onPress={()=>this.addTodo()}>
                        <AntDesign name="plus" size={16} color='black'/>
                    </Pressable> 
                </View>
            </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}