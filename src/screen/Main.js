import React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Strings from 'res/strings.js';

const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('AddFerment')}
        title={Strings.scrMnAddButton}
      />
    </View>
  );
};

export default MainScreen;
