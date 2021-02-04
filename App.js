import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddFermentScreen from './src/screen/AddFerment.js';
import MainScreen from './src/screen/Main.js';
import styled, {ThemeProvider} from 'styled-components/native';
import theme from 'res/theme.js';
//import Strings from 'res/strings.js';

const Stack = createStackNavigator();

const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
