import React, {useState} from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First from './pages/First';
import Second from './pages/Second';



const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={First} />
        <Stack.Screen name="SecondScreen" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;