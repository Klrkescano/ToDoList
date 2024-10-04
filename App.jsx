import React from 'react';
import {View} from 'react-native';
import ToDoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <View>
      <TodoList />
      <ToDoForm />
    </View>
  );
}

export default App;
