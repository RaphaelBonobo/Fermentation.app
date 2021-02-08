// HeaderTextInput
//This a custom bigger text input specifically styled to match header exceptations, usually meant for ferment titles and heavy titles.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import React from 'react';
import styled from 'styled-components/native';

const HeaderTextInput = (props) => {
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
    <ContainerHeaderInput>
      <StyledHeaderInput
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
    </ContainerHeaderInput>
  );
};

const ContainerHeaderInput = styled.View`
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

const StyledHeaderInput = styled.TextInput`
  color: ${(props) => props.theme.main};
`;

export default HeaderTextInput;
