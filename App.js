import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { AddTodo } from './src/AddTodo'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])
  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title
    }
    setTodos(prev => {
      return [
        ...prev,
        newTodo
      ]
    })
  }
  const removeTodo = id => {
    setTodos(prev => prev.filter(item => item.id != id))
  }
  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({item}) => {
            return <Todo removeTodo={removeTodo} id={item.id} title={item.title} />
          }}
          keyExtractor={item => item.id.toString()}
          maxHeight={'80%'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
});
