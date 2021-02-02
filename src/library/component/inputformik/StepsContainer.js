// Custom TextInput for regular text component made to fit in Formik components and refractor for simplicity sake.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// The main point of all of this : onChangeText={(text) => onChange(name)(text)}
// This allows us to dynamically add new custom fields and track the state separatly using Formik magic without complex store manipulation.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {StyleSheet, Button, View, Text} from 'react-native';
import React from 'react';
import {Fonts, Colors} from 'res';
import Accordion from 'react-native-collapsible/Accordion';
import {useState} from 'react';
import StepsInput from './StepsInput.js';

const StepsContainer = (props) => {
  const {
    form: {values},
  } = props;

  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section, index, isActive) => {
    //Accordion Header view
    let stepNumber = index + 1;
    return (
      <View style={styles.headerContainer}>
        <Text>{section.nameStep}</Text>
        <Text>{stepNumber}</Text>
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
          props.push();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  arrayContainer: {
    flexDirection: 'row',
  },
  regularText: {
    fontSize: Fonts.regularSize,
    fontFamily: Fonts.primaryTypo,
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default StepsContainer;
