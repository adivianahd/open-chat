import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './src/components/Card';

const onPress = () => {
  console.log("este es el onPress");
}

const App = () => {
  return (
    <>
      <View style={styles.engine}>
        <Card elevation={1} onPress={onPress}>
          <Text style={styles.TextStyle}>Soy una Card</Text>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  TextStyle: {
    fontSize: 18,
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
