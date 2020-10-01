import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card } from '../components';

const Rooms = ({ rooms , onSelect }) => {
  return (
    <View>
      <FlatList
        data={rooms}
        keyExtractor={room => room.id}
        renderItem={(room) =>
          <Card elevation={1} onPress={() => onSelect(room.item.id)}>
            <Text>{room.item.name}</Text>
          </Card>
          }
      />
    </View>
  )
};

Rooms.navigationOptions = {
  title: 'Salas',
};

export default Rooms;
