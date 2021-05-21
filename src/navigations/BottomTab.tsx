import React from 'react';
import {NavigationContainer, TabActionHelpers} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SettingsScreen from '../components/SettingsScreen';
import InvoiceScreen from '../components/InvoiceScreen';
// import screens

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: true,
  activeTintColor: '#ffffff',
  tabStyle:{
    backgroundColor: '#081a3b',
    borderRadius: 30, 
    marginLeft: 15,
    marginRight: 15,
    marginTop:8,
    marginBottom:8,
    paddingTop:5,
    paddingBottom:5
  },
  style: {
    height: '8%',
    backgroundColor: '#1f3257',
  },
  
};

const BottomTabNavigation = () => {
  return (
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Invoice"
          component={InvoiceScreen}
          options={{
            tabBarLabel:'Invoice',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="movie-filter" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel:'Settings',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          
          }}
        />
      </Tab.Navigator>
  );
};

  export default BottomTabNavigation;