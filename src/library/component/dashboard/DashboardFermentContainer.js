// DashboardFermentContainer

import {Button, TouchableOpacity} from 'react-native';
import React from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import {useState} from 'react';
import StepsInput from './StepsInput.js';
import Subheader from 'customui/Subheader.js';
import {Strings} from 'res';

const StepsContainer = (props) => {
  const {
    form: {values},
  } = props;

  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section, index, isActive) => {
    //Accordion Header view
    let stepName = '';
    if (section.nameStep === '') {
      stepName = Strings.step;
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
        duration={800}
        onChange={(sections) => {
          setActiveSections(sections.includes(undefined) ? [] : sections);
        }}
      />
      <Button
        title={Strings.add}
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
