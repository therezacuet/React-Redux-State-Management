/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import React from 'react';
import { Provider } from 'react-redux';
 import StackRouter from './src/navigations/RootNavigator';

 import configureStore from './src/redux/store';
 const store = configureStore();
 const App = () => {
   return (
     <Provider store={store}>
        <StackRouter />
     </Provider>
   );
 };



 export default App;
