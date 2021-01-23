import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddFerment from './src/screen/AddFerment.js'
import Strings from 'res/strings.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Strings.scrAfMain}>
        <Stack.Screen name={Strings.scrAfMain} component={AddFerment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
