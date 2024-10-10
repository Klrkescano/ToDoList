import React from 'react';
import {View} from 'react-native';
import ToDoForm from './components/ToDoForm';
import TodoList from './components/TodoList';
import {useState} from 'react';
function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  return (
    <View>
      <TodoList tasks={tasks} />
      <ToDoForm />
    </View>
  );
}

export default App;
