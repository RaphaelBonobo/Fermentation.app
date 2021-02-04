import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const TemperatureInput = (props) => {
  const {
    field: {name},
    form: {setFieldValue},
    ...inputProps
  } = props;

  return <MultiSlider />;
};

export default TemperatureInput;
