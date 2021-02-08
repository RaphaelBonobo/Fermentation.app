// StepsInput

import styled from 'styled-components/native';
import React from 'react';
import SubheaderTextInput from './SubheaderTextInput.js';
import TemperatureInput from './TemperatureInput.js';
import {Field} from 'formik';
import Subheader from 'customui/Subheader.js';
import DurationInput from './DurationInput.js';

const StepsInput = (section, index, isActive) => {
  return (
    <ContainerStepInput key={index}>
      <Field
        key={`steps.${index}.nameStep`}
        name={`steps.${index}.nameStep`}
        component={SubheaderTextInput}
      />
      <Subheader subheader={'Temperature'} />
      <Field
        key={`steps.${index}.tempStep`}
        name={`steps.${index}.tempStep`}
        component={TemperatureInput}
      />

      <Field
        key={`steps.${index}.durationStep`}
        name={`steps.${index}.durationStep`}
        component={DurationInput}
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
