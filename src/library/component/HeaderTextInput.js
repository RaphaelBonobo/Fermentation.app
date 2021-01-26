// This a custom bigger text input specifically styled to match header exceptations, usually meant for ferment titles and heavy titles.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Colors from 'res/color.js';
import Fonts from 'res/font.js';

const HeaderTextInput = (props) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  return (
    <>
      <TextInput
        style={styles.headerText}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: Fonts.headerSize,
    fontFamily: Fonts.primaryTypo,
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default HeaderTextInput;
