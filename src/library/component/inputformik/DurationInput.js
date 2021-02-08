import {Text} from 'react-native';
import React, {useState} from 'react';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const DurationInput = (props) => {
  const {
    field: {name},
    form: {setFieldValue},
  } = props;

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [month, setMonth] = useState(0);

  const onMonthChange = (e) => {
    if (e.nativeEvent.y > 0) {
      setMonth(0);
    } else if (e.nativeEvent.y < -120) {
      setMonth(12);
    } else {
      setMonth(Math.round(e.nativeEvent.y * -0.1));
    }
  };

  const onDayChange = (e) => {
    if (e.nativeEvent.y > 0) {
      setDay(0);
    } else if (e.nativeEvent.y < -310) {
      setDay(31);
    } else {
      setDay(Math.round(e.nativeEvent.y * -0.1));
    }
  };

  const onHourChange = (e) => {
    if (e.nativeEvent.y > 0) {
      setHour(0);
    } else if (e.nativeEvent.y < -240) {
      setHour(24);
    } else {
      setHour(Math.round(e.nativeEvent.y * -0.1));
    }
  };

  const onStateChange = (e) => {
    if (e.nativeEvent.state === State.END) {
      setFieldValue(name, hour + month * 744 + day * 24);
    }
  };

  return (
    <DurationContainer>
      <CountingContainer>
        <Text>{'Month'}</Text>
        <PanGestureHandler
          onHandlerStateChange={onStateChange}
          onGestureEvent={onMonthChange}>
          <CountingText>{month}</CountingText>
        </PanGestureHandler>
      </CountingContainer>

      <CountingContainer>
        <Text>{'Days'}</Text>
        <PanGestureHandler
          onHandlerStateChange={onStateChange}
          onGestureEvent={onDayChange}>
          <CountingText>{day}</CountingText>
        </PanGestureHandler>
      </CountingContainer>

      <CountingContainer>
        <Text>{'Hours'}</Text>
        <PanGestureHandler
          onHandlerStateChange={onStateChange}
          onGestureEvent={onHourChange}>
          <CountingText>{hour}</CountingText>
        </PanGestureHandler>
      </CountingContainer>
    </DurationContainer>
  );
};

const DurationContainer = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
`;
const CountingContainer = styled.View`
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  margin: 5px;
`;
const CountingText = styled.Text`
  font-size: 20px;
`;

export default DurationInput;
