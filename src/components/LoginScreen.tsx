
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import { Switch } from 'react-native';
import { Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import {Button, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from '../navigations/data';
import styles from '../styles/LoginScreenStyle';



interface LoginsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'LOGIN'>;
  route: RouteProp<RootStackParamList, 'LOGIN'>;
}

const LoginScreen: React.FC<LoginsScreenProps> = (props) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);

  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
    return () => {
     // console.log('page is destroyed');
    };
  }, []);

  const login = ()=>{props.navigation.replace('HOME')}

  return (
    
    <View style={styles.container}>

        <View style={styles.containerTop}>
            <Image source={require('../assets/images/top_bg.jpg')}
                style={{width: '100%', resizeMode: 'contain'}}/>
            <View style={{alignItems:'center'}}>
                
            </View>

        </View>
        <View style={styles.containerBottom}>

            <View>
                <Text style={{fontSize:30, fontStyle:'italic', color:'blue', fontWeight:'bold'}}>Sign In</Text>
                <Text style={{marginBottom:30}}>Don't have an account? Contact Us</Text>
                <Text style={styles.inputLabel}>Email</Text>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholderTextColor="#003f5c"
                        onChangeText={setEmail}
                        value={email}/>
                </View>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholderTextColor="#003f5c"
                        onChangeText={setPassword}
                        value={password}
                        textContentType="password"
                        secureTextEntry={ isPasswordHidden ? true : false }
                        autoCompleteType="password"
                        returnKeyType="go"
                        clearButtonMode="while-editing"/>
                        {/* <Icon
                            name={isPasswordHidden ? 'remove-red-eye' : 'remove-red-eye'}
                            size={35}
                            color="grey"
                            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                        /> */}
                </View>
                <View style={{flex:1, flexDirection:'row', width:'80%', alignItems:'baseline',marginTop:20}}>
                    <TouchableOpacity style={{flex:1.5, alignItems:'flex-start',alignContent:'center'}}>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn} onPress={()=> login()}>
                        <Text style={styles.loginText}>LET'S GO</Text>
                        <MaterialIcons size={25} name="arrow-right-alt" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  
    </View>
  );
};

export default LoginScreen;