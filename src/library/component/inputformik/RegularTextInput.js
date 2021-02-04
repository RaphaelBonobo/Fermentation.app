// Custom TextInput for regular text component made to fit in Formik components and refractor for simplicity sake.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// The main point of all of this : onChangeText={(text) => onChange(name)(text)}
// This allows us to dynamically add new custom fields and track the state separatly using Formik magic without complex store manipulation.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {TextInput} from 'react-native';
import React from 'react';

const RegularTextInput = (props) => {
  // Formik sends in the props that automagically connects the Input form with the
  // general Formik Context (provided within the AddFerment screen with <Formik> component)

  const {
    field: {name, onBlur, onChange, value},
    form: {setFieldTouched},
    ...inputProps
  } = props;

  // The onChange(name)(text) is specific to Formik allows us to send in from the parent component a "name" prop that serves as an ID ;
  // The text is the value put in by the user.
  // setFieldTouched is a Formik hook and onBlur allow the parent component to be aware of which Input is in interaction with the user.

  return (
    <>
      <TextInput
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

export default RegularTextInput;
