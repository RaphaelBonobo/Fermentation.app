// Classic subheader component that is meant to encapsulate custom text sent from other components
// Usually meant for under titles and complementary but important information

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
    flexGrow: 1,
  },
  subheaderText: {
    fontSize: Fonts.subheaderSize,
    fontFamily: Fonts.secondaryTypo,
    textAlign: 'center',
    color: Colors.secondary,
  },
});

export default Subheader;
