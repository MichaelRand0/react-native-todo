import React, { useState } from "react"
import { StyleSheet, TextInput, Button, View, Alert } from "react-native"

export const AddTodo = props => {
  const {onSubmit} = props
  const [value, setValue] = useState('')
  const pressHandler = () => {
    if(value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название дела не может быть пустым')
    }
  }
  return (
    <View style={styles.wrapper}>
      <TextInput 
      value={value} 
      placeholder='Введи название дела...' 
      onChangeText={setValue} 
      style={styles.textInput}
      autoCorrect={false} />
      <Button onPress={pressHandler} title='Добавить' />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 30
  },
  textInput: {
    width: '65%',
    paddingVertical: 3,
    fontSize: 16,
    borderBottomColor: '#ffcc00',
    borderBottomWidth: 2,
    borderStyle: 'solid'
  },
  button: {

  }
})