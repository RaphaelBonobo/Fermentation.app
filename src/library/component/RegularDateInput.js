import React from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

const RegularDateInput = (props) => {
  const {
    field: {name, value},
    form: {setFieldValue},
  } = props;

  return (
    <View style={styles.container}>
      <DatePicker
        androidVariant="nativeAndroid"
        date={value}
        onDateChange={(val) => setFieldValue(name, val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default RegularDateInput;
