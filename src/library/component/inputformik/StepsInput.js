import {View} from 'react-native';
import React from 'react';
//import {Fonts, Colors, Strings} from 'res';
import SubheaderTextInput from 'inputformik/SubheaderTextInput.js';
import {Field} from 'formik';

const StepsInput = (section, index, isActive) => {
  return (
    <View key={index}>
      <Field
        key={`steps.${index}.nameStep`}
        name={`steps.${index}.nameStep`}
        component={SubheaderTextInput}
        placeholder="Name the step"
      />
    </View>
  );
};

export default StepsInput;
