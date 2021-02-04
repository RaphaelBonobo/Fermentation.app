// Custom TextInput for regular text component made to fit in Formik components and refractor for simplicity sake.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// The main point of all of this : onChangeText={(text) => onChange(name)(text)}
// This allows us to dynamically add new custom fields and track the state separatly using Formik magic without complex store manipulation.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {Button, View} from 'react-native';
import React from 'react';
import {Colors, Strings} from 'res';
import RegularTextInput from 'inputformik/RegularTextInput.js';
import {Field} from 'formik';

const IngredientTextInput = (props) => {
  const {
    form: {values},
  } = props;
  return (
    <>
      {values.ingredients.map((ingredients, index) => (
        <View key={index}>
          <Field
            key={`ingredients.${index}.nameIngredient`}
            name={`ingredients.${index}.nameIngredient`}
            component={RegularTextInput}
            placeholder="Type in an ingredient"
          />
          <Field
            key={`ingredients.${index}.quantity`}
            name={`ingredients.${index}.quantity`}
            component={RegularTextInput}
            placeholder="Type in a quantity"
          />
          <Button
            color={Colors.primary}
            key={`ingredients.${index}.remove`}
            title="-"
            onPress={() => {
              props.remove(index);
            }}
          />
        </View>
      ))}
      <Button
        title={Strings.scrMnAddIngButton}
        color={Colors.primary}
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

export default IngredientTextInput;
