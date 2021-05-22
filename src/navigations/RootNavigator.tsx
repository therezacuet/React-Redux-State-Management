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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeHeader from '../components/HeaderComponent';
import { Button, Picker, Text } from 'react-native';

interface StackRouterProps {}
const Stack = createStackNavigator<RootStackParamList>();
const StackRouter: React.FC<StackRouterProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN">
        <Stack.Screen options={{headerShown: false}} name="LOGIN" component={LoginScreen} />
        <Stack.Screen options={{
          title: '[ me ]',
          headerStyle: {
            backgroundColor: '#2a86db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Text style={{marginRight:25,color:'white'}}>Mapple Street Biscuit- Greenville</Text>
          ),
        }} name="HOME" component={BottomTabNavigation} />
        <Stack.Screen options={{}} name="INVOICE" component={InvoiceScreen} />
        <Stack.Screen name="TODOLIST" options={{headerShown: true}} component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;