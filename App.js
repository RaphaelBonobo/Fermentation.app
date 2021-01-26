import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddFermentScreen from './src/screen/AddFerment.js';
import MainScreen from './src/screen/Main.js';
//import Strings from 'res/strings.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="AddFerment" component={AddFermentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
