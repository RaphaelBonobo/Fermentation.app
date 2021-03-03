// IngredientTextInput
// Custom TextInput for regular text component made to fit in Formik components and refractor for simplicity sake.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// The main point of all of this : onChangeText={(text) => onChange(name)(text)}
// This allows us to dynamically add new custom fields and track the state separatly using Formik magic without complex store manipulation.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {Button} from 'react-native';
import React from 'react';
import {Strings} from 'res';
import RegularTextInput from 'inputformik/RegularTextInput.js';
import {Field} from 'formik';
import styled from 'styled-components/native';

const IngredientTextInput = (props) => {
  const {
    form: {values},
  } = props;
  return (
    <>
      {values.ingredients.map((ingredients, index) => (
        <IngredientContainer key={index}>
          <Field
            key={`ingredients.${index}.nameIngredient`}
            name={`ingredients.${index}.nameIngredient`}
            component={RegularTextInput}
            placeholder={Strings.placeholderIngredient}
            multiline={false}
          />
          <Field
            key={`ingredients.${index}.quantity`}
            name={`ingredients.${index}.quantity`}
            component={RegularTextInput}
            placeholder={Strings.placeholderQuantity}
            multiline={false}
          />
          <Button
            key={`ingredients.${index}.remove`}
            title="-"
            onPress={() => {
              props.remove(index);
            }}
          />
        </IngredientContainer>
      ))}
      <Button
        title={Strings.scrMnAddIngButton}
        onPress={() => {
          props.push({
            nameIngredient: '',
            quantity: '',
          });
        }}
      />
    </>
  );
};

const IngredientContainer = styled.View`
  flex-direction: row;
`;

export default IngredientTextInput;
