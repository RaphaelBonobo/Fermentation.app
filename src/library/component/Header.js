// Classic header component that is meant to encapsulate custom text sent from other components
// Usually meant for ferment titles and heavy titles

import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from 'res/color.js';
import Fonts from 'res/font.js';

const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.headerText}>{props.header}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: Fonts.headerSize,
    fontFamily: Fonts.primaryTypo,
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default Header;
