// StepsContainer

// The main point of all of this : onChangeText={(text) => onChange(name)(text)}
// This allows us to dynamically add new custom fields and track the state separatly using Formik magic without complex store manipulation.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

// This is the Accordion Component core to our main feature : the recipe from the step approach, each step being a collapsible element in which
// we can find nested fields describing every step our ferment takes or what we are suppose to do. Props used here :
// 'activeSections' tracks the section that is currently open. The useState hook keeps track of that.
// 'section' is an array of the steps that are dynamically added by the user.
// 'renderHeader' & 'renderContent' are component with a <View> in it, which are composed in our case with more forms.
// 'touchableComponent' is the component used to reference the 'on header press' sequence. Here we chose to use TouchableOpacity but
// TouchableWithoutFeedback was also possible.
// 'duration' is the time taken to open the section.
// 'onChange' opens the good section asked by the user.
// For additionnal props see the documentation, referenced in the App Wiki.

import {Button, View, TouchableOpacity} from 'react-native';
import React from 'react';
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
    let stepName = '';
    if (section.nameStep === '') {
      stepName = 'Step';
    } else {
      stepName = section.nameStep;
    }
    return <Subheader subheader={stepName} />;
  };

  return (
    <>
      <Accordion
        activeSections={activeSections}
        sections={values.steps}
        renderHeader={renderHeader}
        renderContent={StepsInput}
        touchableComponent={TouchableOpacity}
        duration={400}
        onChange={(sections) => {
          setActiveSections(sections.includes(undefined) ? [] : sections);
        }}
      />
      <Button
        title={'Add'}
        onPress={() => {
          props.push({
            nameStep: '',
            durationStep: '',
            tempStep: '',
            controlSimpleStep: [''],
            commentStep: '',
          });
        }}
      />
    </>
  );
};

export default StepsContainer;
