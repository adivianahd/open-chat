import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity {...props}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
};

export default Button;