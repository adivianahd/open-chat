import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Input, Card, Button } from '../components';

const messages = {
  'messages': [
      {
          "message": "ME",
          "user": {
              "nickname": "ASTRID",
              "id": "random1"
          }
      },
      {
          "message": "que?",
          "user": {
              "nickname": "ME",
              "id": "random2",
          },
          "mine": true,
      },
      {
        "message": "felicidades",
        "user": {
            "nickname": "ASTRID",
            "id": "random1"
        }
    },
    {
      "message": "mi amor",
      "user": {
          "nickname": "ASTRID",
          "id": "random1"
      }
  },
  {
    "message": "completaste la tarea de hoy :)",
    "user": {
        "nickname": "ASTRID",
        "id": "random1"
    }
},
{
  "message": "GRACIAAAAAAAAAAAAAAAAAAAS",
  "user": {
      "nickname": "ME",
      "id": "random2",
  },
  "mine": true,
},

  ],
  'id': "facd",
  'name': "Room 1"
}

const users = {
  'user': {
    "nickname": "Astrid",
    "id": "random2"
  }
}

const Chat = ({ room = messages, user, onChangeText, send }) => {
  
  const bubleSelector = item => {
    const style = item.mine? styles.send : styles.received
    
     return <Card style={[style, styles.buble]}>
        <Text>{item.user.nickname}</Text>
        <Text>{item.message}</Text>
      </Card>
  }
  
  return (
  <>
    <View style={styles.container}>
      <FlatList 
        data={room.messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item})=> bubleSelector(item)}
      />
    </View>
    <View style={styles.componentView}>
      <Input style={styles.inputChat} value={'Escribe tu mensaje'} onChangeText={onChangeText}/>
      <Button title='Send' onPress={send} style={styles.buttonSend}/>
    </View>
  </>
  )
};

Chat.navigationOptions = {
  title: 'Chat',
};

const styles = StyleSheet.create({
  container:{
    flex: 5,
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

  componentView: {
    flex: 0.30,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef',

  },

  inputChat: {
    width: '80%',
    borderRadius: 15, 
  },

  buttonSend: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    backgroundColor: '#faa',
    borderRadius: 15, 
  },
})

export default Chat;
