// StepsInput
// This is the component that, in a way, is the form within the form
// It contains all the specific input and will become larger in the future
// So the StepsInput rather is used to have lighter files and code samples.

// This component ONLY WORKS within a <Formik> component and as a child of a <FieldArray> component.

import styled from 'styled-components/native';
import React from 'react';
import SubheaderTextInput from './SubheaderTextInput.js';
import TemperatureInput from './TemperatureInput.js';
import RegularTextInput from './RegularTextInput.js';
import {Field} from 'formik';
import Subheader from 'customui/Subheader.js';
import DurationInput from './DurationInput.js';
import TagContainer from './TagContainer.js';
import {Strings} from 'res';

const StepsInput = (section, index, isActive) => {
  return (
    <ContainerStepInput key={index}>
      <Field
        key={`steps.${index}.nameStep`}
        name={`steps.${index}.nameStep`}
        placeholder={Strings.afNameStep}
        component={SubheaderTextInput}
      />
      <Subheader subheader={Strings.temperature} />
      <Field
        key={`steps.${index}.tempStep`}
        name={`steps.${index}.tempStep`}
        component={TemperatureInput}
      />

      <Subheader subheader={Strings.duration} />
      <Field
        key={`steps.${index}.durationStep`}
        name={`steps.${index}.durationStep`}
        component={DurationInput}
      />

      <Subheader subheader={Strings.simpleControls} />
      <Field
        key={`steps.${index}.controlSimpleStep`}
        name={`steps.${index}.controlSimpleStep`}
        component={TagContainer}
      />
      <Subheader subheader={Strings.comment} />
      <Field
        key={`steps.${index}.commentStep`}
        name={`steps.${index}.commentStep`}
        placeholder={Strings.placeholderComment}
        component={RegularTextInput}
        multiline={true}
      />
    </ContainerStepInput>
  );
};

const ContainerStepInput = styled.View`
  border: solid;
  border-radius: 30px;
  border-color: ${(props) => props.theme.main};
  margin: 10px;
`;

export default StepsInput;
