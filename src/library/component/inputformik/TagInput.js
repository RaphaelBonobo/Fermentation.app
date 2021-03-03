// TagInput
// Here is a Chip from RN PAPER Library that, when clicked on, change display (becomes darker)
// And through the field and form sent through the props and the Set object from Javascript
// We create a dynamic array that add or delete a value depending on wether or not the user selected it

import React from 'react';
import {Chip} from 'react-native-paper';

const TagInput = (props) => {
  const {field, form} = props;

  return (
    <>
      <Chip
        {...field}
        selected={field.value.includes(props.data)}
        onPress={() => {
          const set = new Set(field.value);
          if (set.has(props.data)) {
            set.delete(props.data);
          } else {
            set.add(props.data);
          }
          form.setFieldValue(field.name, Array.from(set));
          form.setFieldTouched(field.name, true);
        }}>
        {props.data}
      </Chip>
    </>
  );
};

export default TagInput;
