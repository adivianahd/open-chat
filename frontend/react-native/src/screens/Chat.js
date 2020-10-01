import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Input, Card } from '../components';

const Chat = ({ room, user, onChangeText, send }) => {
  
  const bubleSelector = item => {
    const style = item.mine? styles.send : styles.received
    
     return <Card style={[style, styles.buble]}>
        <Text>{item.user.nickname}</Text>
        <Text>{item.message}</Text>
      </Card>
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={room.messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item})=> bubleSelector(item)}
      />
      <Input value={'hola soy el input'} onChangeText={onChangeText}/> 
    </View>
  )
};

Chat.navigationOptions = {
  title: 'Chat',
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eef',
  },

  send: {
    backgroundColor: '#ffc',
    marginLeft: 'auto',
  },

  received: {
    marginRight: 'auto',
  },

  buble: {
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
})

export default Chat;
