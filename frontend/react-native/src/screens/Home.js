import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Yo soy home</Text>
    </View>
  )
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
