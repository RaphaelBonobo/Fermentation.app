// Custom TextInput for regular text component made to fit in Formik components and refractor for simplicity sake.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// The main point of all of this : onChangeText={(text) => onChange(name)(text)}
// This allows us to dynamically add new custom fields and track the state separatly using Formik magic without complex store manipulation.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts, Colors} from 'res';

const RegularTextInput = (props) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {setFieldTouched},
    ...inputProps
  } = props;

  return (
    <>
      <TextInput
        style={styles.regularText}
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
  regularText: {
    fontSize: Fonts.regularSize,
    fontFamily: Fonts.primaryTypo,
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default RegularTextInput;
