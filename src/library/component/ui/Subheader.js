// Classic reusable subheader component that is meant to encapsulate custom text sent from other components
// Usually meant for under titles and complementary but important informations

import {Text, View} from 'react-native';
import React from 'react';

const Subheader = (props) => (
  <View>
    <Text>{props.subheader}</Text>
  </View>
);

export default Subheader;
