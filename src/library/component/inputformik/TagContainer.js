// TagContainer
// The TagContainer receives the array of possible tags to select and through a .map function generates clickable Chips

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {Field} from 'formik';
import TagInput from './TagInput.js';
import React from 'react';
import styled from 'styled-components/native';
import {Strings} from 'res';

const TagContainer = (props) => {
  return (
    <ControlContainer>
      {Strings.simpleTagsName.map((data, index) => (
        <ChipContainer key={index}>
          <Field
            name={props.field.name}
            key={props.field.name}
            component={TagInput}
            data={data}
          />
        </ChipContainer>
      ))}
    </ControlContainer>
  );
};

const ControlContainer = styled.View`
  flex-direction: row;
  margin: 5px;
`;

const ChipContainer = styled.View`
  flex-wrap: wrap;
`;

export default TagContainer;
