import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ style, value }) => {
  return (
    <TextInput
    style={style}
    onChangeText={text => console.log(text)
    }
    value={value}
    />
  )
};

export default Input;