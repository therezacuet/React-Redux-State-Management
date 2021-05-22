
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import { FlatList, TextInput } from 'react-native';
import { Image } from 'react-native';
import {Button, StyleSheet, Text, View} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Todo } from '../models/Todo';
import { RootStackParamList } from '../navigations/data';
import {addTodo, decrementCounter,incrementCounter } from '../redux/actions';
import { RootState } from '../redux/store';
import styles from '../styles/InvoiceStyle';



interface InvoiceScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'INVOICE'>;
  route: RouteProp<RootStackParamList, 'INVOICE'>;
}

const InvoiceScreen :React.FC<InvoiceScreenProps> = (props) => {

  const [todo, setTodo] = useState('');
  
  const dispatch = useDispatch();
  const {counter} = useSelector( (state:any) => state.todoReducer);



  const increment = () => dispatch(incrementCounter(counter));
  const decrement = () => dispatch(decrementCounter(counter));


  // state = {
  //   counter:0
  // }

  // increateCounter = ()=>{
  //   this.setState({counter : this.state.counter +1});
  // }

  // decreaseCounter = ()=>{
  //   this.setState({counter : this.state.counter - 1 });
  // }
  

  const submitTodo = (todo: string)=> dispatch(addTodo(new Todo(Math.random(),todo)));


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container_todo}>
          
          <Text style={styles.title}>React - Redux</Text>
          <View style={styles.todoInput}>
            <TextInput
              value={todo}
              placeholder='Todo...'
              onChangeText={(todo) => setTodo(todo)}
            />
          </View>
          <View style={{ width:'80%', marginBottom: 16, borderRadius:5 ,borderColor:"gray", borderWidth:1, alignItems:'center', padding:10}}>
            <TouchableOpacity 
              onPress={() => {
                submitTodo(todo)
                setTodo('')
              }}>
              <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width:'80%', marginBottom: 16, borderRadius:5 ,borderColor:"gray", borderWidth:1, alignItems:'center', padding:10}}>
            <TouchableOpacity
              onPress={() =>props.navigation.navigate('TODOLIST')}>
              <Text style={{ fontSize: 22, color: 'black' }}>Go to Todo List</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    </ScrollView>
  );


};


export default InvoiceScreen;

