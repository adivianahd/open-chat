import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home , Rooms, Chat } from './src/screens';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Rooms: {
    screen: Rooms
  },
  Chat: {
    screen: Chat
  },
},{ initialRouteName: 'Rooms'})

export default createAppContainer(AppNavigator);
