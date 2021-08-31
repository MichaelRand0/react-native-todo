import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Todo = props => {
  const {title, removeTodo} = props
  return (
    <TouchableOpacity 
    activeOpacity={0.5} 
    onPress={() => console.log('pressed', props.id)} 
    onLongPress={() => removeTodo(props.id)}>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoText: {
    fontSize: 20
  },
  todoItem: {
    padding: 15,
    borderColor: '#eee',
    borderWidth: 2,
    borderStyle: 'solid',
    marginBottom: 10,
    borderRadius: 5
  }
})