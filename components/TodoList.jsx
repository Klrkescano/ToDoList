import {
  Text,
  View,
  Pressable,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';

export default class TodoList extends Component {
  render() {
    const {tasks} = this.props;
    return (
      <SafeAreaView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});
