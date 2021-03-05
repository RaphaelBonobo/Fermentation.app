// Main Screen

import React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Strings} from 'res';
import CurrentFermentContainer from 'dashboard/CurrentFermentContainer.js';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <CurrentFermentContainer />
      <Button
        onPress={() => navigation.navigate('AddFerment')}
        title={Strings.scrMnAddButton}
      />
    </View>
  );
};

export default Dashboard;
