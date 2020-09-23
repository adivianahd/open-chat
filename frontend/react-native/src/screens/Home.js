import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '../components';

const Home = ({ onPress, disable }) => {
  return (
    <View style={styles.container}>
      <Text>Introduce tu NickName</Text>
      <Input value={'AdivianaHd'} style={styles.InputStyle}/>
      <Button/>
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

  InputStyle:{ 
    backgroundColor: '#fff',
    height: 40, 
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1
  },
});
