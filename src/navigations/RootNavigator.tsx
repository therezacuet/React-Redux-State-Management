import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTab';
import { RootStackParamList } from './data';
import LoginScreen from '../components/LoginScreen';
import InvoiceScreen from '../components/InvoiceScreen';
import TodoList from '../components/TodoListScreen';


interface StackRouterProps {}
const Stack = createStackNavigator<RootStackParamList>();
const StackRouter: React.FC<StackRouterProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="INVOICE">
        <Stack.Screen options={{headerShown: false}} name="LOGIN" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="HOME" component={BottomTabNavigation} />
        <Stack.Screen options={{headerShown: false}} name="INVOICE" component={InvoiceScreen} />
        <Stack.Screen name="TODOLIST" options={{headerShown: true}} component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;