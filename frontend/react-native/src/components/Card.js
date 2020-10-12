import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { getElevation } from "../utilities/getElevation";

export default ({ elevation = 1, onPress, children, style={} }) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper style={[styles.container, getElevation(elevation), style]} onPress={onPress}>
      {children}
    </Wrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
