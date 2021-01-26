import React from 'react';
import Subheader from 'library/component/Subheader.js';
import HeaderTextInput from 'library/component/HeaderTextInput.js';
import IngredientTextInput from 'library/component/IngredientTextInput.js';
import RegularTextInput from 'library/component/RegularTextInput.js';
import RegularDateInput from 'library/component/RegularDateInput.js';
import Strings from 'res/strings.js';
import Fonts from 'res/font.js';
import Colors from 'res/color.js';
import {ScrollView, StyleSheet, Button} from 'react-native';
import {Field, FieldArray, Formik} from 'formik';
import dayjs, { Dayjs } from 'dayjs';
import { date } from 'yup';

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
        }}
        onSubmit={(values) => console.log(values)}
        onBlur={(values) => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            {/* This fields call for a specifically tailored TextInput <HeaderTextInput> to gather the main name of the ferment */}
            <Field
              component={HeaderTextInput}
              name="fermentName"
              placeholder={Strings.afNameFerment}
            />
            <Subheader subheader={Strings.afBasicInfo} />

            <Field
              component={RegularTextInput}
              name="fermentType"
              placeholder={Strings.afTypeFerment}
            />

            <Field component={RegularDateInput} name="date" />

            <Subheader subheader={Strings.afIngredient} />
            {/* This fieldarray is made to have a dynamic field generation to add a large amount of different ingredient
            <IngredientTextInput> is itself reliant on <RegularTextInput> */}
            <FieldArray name="ingredients" component={IngredientTextInput} />

            <Subheader subheader={Strings.afSteps} />

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

const styles = StyleSheet.create({
  headerText: {
    fontSize: Fonts.headerSize,
    fontFamily: Fonts.primaryTypo,
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default AddFermentScreen;
