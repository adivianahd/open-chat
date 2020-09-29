import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '../components';

const Home = ({ onPress, onChange, disable }) => {
  return (
    <View style={styles.container}>
      <Text>Introduce tu NickName</Text>
      <Input value={'AdivianaHd'} onChange={onChange}/>
      <Button onPress={onPress} />
    </View>
  )
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef',
  },
});

