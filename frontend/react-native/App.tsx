import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.engine}>
        <Text style={styles.footer}>hola</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },

  footer: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
