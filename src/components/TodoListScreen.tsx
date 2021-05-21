import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../navigations/data';
import { deleteTodo } from '../redux/actions';
import { RootState } from '../redux/store';
import { ListItem, Icon } from 'react-native-elements'
import { useEffect } from 'react';

interface TodoListScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'TODOLIST'>;
    route: RouteProp<RootStackParamList, 'TODOLIST'>;
  }

const TodoList : React.FC<TodoListScreenProps> = (props) => {

  const dispatch = useDispatch();

  const deleteCurrent = (todo: any) => dispatch(deleteTodo(todo))

  const {todoList}= useSelector( (state: RootState) => state.reducer);

  useEffect(() => {
   
  }, []);

  return (
    <FlatList style={styles.listContainer}
      data={todoList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={
        (data) =>
        <View style={styles.container}>
            <Text>{data.item.name}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => deleteCurrent(data.item)}>
                <Icon name="delete" size={30} color="#e33057" />
            </TouchableOpacity>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#e5e5e5',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'white',
    paddingLeft:20,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoList;