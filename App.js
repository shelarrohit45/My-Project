// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/pages/home';
import Login from './src/pages/login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: '',  headerShown: false, }} />
        <Stack.Screen name="login" component={Login}  options={{ title: '',  headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;