// TemperatureInput
// Is meant to be custom made but now relies on the MultiSlider Library
// Allows us to create a slider for the user to select intuitively a range of temperature

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState} from 'react';
import styled from 'styled-components/native';

const TemperatureInput = (props) => {
  const {
    field: {name},
    form: {setFieldValue},
  } = props;

  const [temp, setTemp] = useState(['*', '*']);

  let tempDisplay = temp[0] + ' - ' + temp[1] + '°C';

  return (
    <ContainerTemperatureInput>
      <StyledTempDisplay>{tempDisplay}</StyledTempDisplay>
      <MultiSlider
        onValuesChangeFinish={(val) => setFieldValue(name, val)}
        onValuesChange={(vals) => setTemp(vals)}
        min={8}
        max={40}
        values={temp}
        minMarkerOverlapStepDistance={2}
        allowOverlap={false}
      />
    </ContainerTemperatureInput>
  );
};

const ContainerTemperatureInput = styled.View`
  margin-left: auto;
  margin-right: auto;
`;

const StyledTempDisplay = styled.Text`
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
`;

export default TemperatureInput;
