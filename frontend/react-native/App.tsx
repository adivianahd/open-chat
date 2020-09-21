import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home , Rooms } from './src/screens';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Rooms: {
    screen: Rooms
  },
},{ initialRouteName: 'Home'})

export default createAppContainer(AppNavigator);
