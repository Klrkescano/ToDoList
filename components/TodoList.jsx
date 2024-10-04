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
    return (
      <SafeAreaView>
        <ScrollView>
          <Pressable>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>Do laundry</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>Go to gym</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>Walk dog</Text>
            </View>
          </Pressable>
        </ScrollView>
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
