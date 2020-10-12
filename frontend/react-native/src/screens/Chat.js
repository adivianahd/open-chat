import React, { useRef, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, Text, View, Keyboard } from 'react-native';
import { Button, Card, Input } from '../components';

const Chat = ({ room , user, onChangeText, send }) => {
  const flatListRef = useRef();

  const bubleSelector = item => {
    const style = item.mine ? styles.send : styles.received

    return <Card style={[style, styles.buble]}>
      <Text>{item.user.nickname}</Text>
      <Text>{item.message}</Text>
    </Card>
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setTimeout(() =>
        flatListRef?.current.scrollToEnd({ animated: true }),
        100)
      }
    )
  })

  return (
    <>
      <View style={styles.container}>
        <FlatList
          ref={r => flatListRef.current = r}
          data={room.messages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => bubleSelector(item)}
        />
      </View>
      <KeyboardAvoidingView style={styles.componentView} behavior={"height"} >
        <Input style={styles.inputChat} value={'Escribe tu mensaje'} onChangeText={onChangeText} />
        <Button title='Enviar' onPress={send} style={styles.buttonSend} />
      </KeyboardAvoidingView>
    </>
  )
};

Chat.navigationOptions = {
  title: 'Chat',
};

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: '#acc',
    padding: 10,
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
