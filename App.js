import React from 'react';
import { Group, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import NewGroup from './src/NewGroup';
import Message from './src/Message';
import Groups from './src/List';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Message">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewGroup" component={NewGroup} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Groups" component={Groups}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


