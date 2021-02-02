// This is the Screen and higher parent component that collects the data when the user decides to add a new ferment to his list
// The Formik library helps us automagically create a local state proper to the form, which will help us only call Redux when needed.
// The other main advantage is that it allows us to encapsulate more easily and to render a readable and accessible code.

import React from 'react';
import Subheader from 'customui/Subheader.js';
import {
  HeaderTextInput,
  IngredientTextInput,
  RegularDateInput,
  RegularTextInput,
  StepsContainer,
} from 'inputformik';
import {Colors, Strings} from 'res';
import {ScrollView, Button} from 'react-native';
import {Field, FieldArray, Formik} from 'formik';

const AddFermentScreen = () => {
  return (
    <ScrollView>
      {/* The Formik library helps us organize the gathering of our data in one place to simplify control, test,
      and create new data */}
      <Formik
        initialValues={{
          fermentName: '',
          fermentType: '',
          date: new Date(),
          ingredients: [{nameIngredient: '', quantity: ''}],
          steps: [
            {
              nameStep: 'Step',
              durationStep: 'Pouleto',
              tempStep: 'Como estas?',
              controlSimpleStep: [''],
              commentStep: '',
            },
          ],
        }}
        onSubmit={(values) => console.log(values)}
        onBlur={(values) => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            {/* This field call for a specifically tailored TextInput <HeaderTextInput> to gather the main name of the ferment */}
            <Field
              component={HeaderTextInput}
              name="fermentName"
              placeholder={Strings.afNameFerment}
            />
            <Subheader subheader={Strings.afBasicInfo} />

            {/* This field call for a specifically tailored TextInput <RegularTextInput> to gather the type of the ferment */}
            <Field
              component={RegularTextInput}
              name="fermentType"
              placeholder={Strings.afTypeFerment}
            />

            {/* This field call for a specifically tailored TextInput <RegularDateInput> to gather the date when the ferment began
            it contains the DatePicker component */}
            <Field component={RegularDateInput} name="date" />

            <Subheader subheader={Strings.afIngredient} />

            {/* This fieldarray is made to have a dynamic field generation to add a large amount of different ingredient
            <IngredientTextInput> is itself reliant on <RegularTextInput> */}
            <FieldArray name="ingredients" component={IngredientTextInput} />

            <Subheader subheader={Strings.afSteps} />

            {/* This field is the big boy. Its an array of an array of sorts. Quite nested, it is the main point of difficulty here.
            This is a collapsible form within the bigger form. It can be dynamically generated in order to add as many steps as needed.
            The point is for the fermenter to create a procedural recipe reflecting closely his practice. */}
            <FieldArray name="steps" component={StepsContainer} />

            <Button
              onPress={handleSubmit}
              title={Strings.scrMnAddButton}
              color={Colors.primary}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddFermentScreen;
