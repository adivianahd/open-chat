import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, style }) => {
  return (
    <TextInput
      style={[styles.InputStyles, style]}
      onChangeText={onChangeText}
      value={value}
    />
  )
};

export default Input;

const styles = StyleSheet.create({
  InputStyles:{ 
    backgroundColor: '#fff',
    height: 40, 
    width: '80%', 
    borderColor: 'gray', 
    borderWidth: 1
  }
});
