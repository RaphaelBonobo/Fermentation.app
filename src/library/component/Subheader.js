// Classic reusable subheader component that is meant to encapsulate custom text sent from other components
// Usually meant for under titles and complementary but important informations

import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from 'res/color.js';
import Fonts from 'res/font.js';

const Subheader = (props) => (
  <View style={styles.container}>
    <Text style={styles.subheaderText}>{props.subheader}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  subheaderText: {
    fontSize: Fonts.subheaderSize,
    fontFamily: Fonts.primaryTypo,
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default Subheader;
