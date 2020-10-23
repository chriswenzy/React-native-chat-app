import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import NewGroup from './src/NewGroup';
import Message from './src/Message';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewGroup" component={NewGroup} />
        <Stack.Screen name="Message" component={Message} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


