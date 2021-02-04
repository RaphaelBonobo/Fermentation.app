// Custom TextInput for regular text component made to fit in Formik components and refractor for simplicity sake.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// The main point of all of this : onChangeText={(text) => onChange(name)(text)}
// This allows us to dynamically add new custom fields and track the state separatly using Formik magic without complex store manipulation.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {Button, View} from 'react-native';
import React from 'react';
import {Colors} from 'res';
import Accordion from 'react-native-collapsible/Accordion';
import {useState} from 'react';
import StepsInput from './StepsInput.js';
import Subheader from 'customui/Subheader.js';

const StepsContainer = (props) => {
  const {
    form: {values},
  } = props;

  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section, index, isActive) => {
    //Accordion Header view
    return (
      <View>
        <Subheader subheader={section.nameStep} />
      </View>
    );
  };

  return (
    <>
      <Accordion
        activeSections={activeSections}
        sections={values.steps}
        renderHeader={renderHeader}
        renderContent={StepsInput}
        duration={400}
        onChange={(sections) => {
          setActiveSections(sections.includes(undefined) ? [] : sections);
        }}
      />
      <Button
        title={'Add'}
        color={Colors.primary}
        onPress={() => {
          props.push({
            nameStep: 'Step',
            durationStep: 'Pouleto',
            tempStep: 'Como estas?',
            controlSimpleStep: [''],
            commentStep: '',
          });
        }}
      />
    </>
  );
};

export default StepsContainer;
