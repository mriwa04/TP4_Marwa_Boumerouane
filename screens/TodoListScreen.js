import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/todosSlice';
import AppBar from '../components/AppBar'; 
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function TodolistScreen({ navigation }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    dispatch(addTodo({ id: 1, title: 'Faire les courses' }));
    dispatch(addTodo({ id: 2, title: 'Sortir le chien' }));
    dispatch(addTodo({ id: 3, title: 'Coder une app RN' }));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <AppBar 
        title="Mes tâches (Redux)" 
        showLogout={true} 
        onLogout={logout} 
      />
      
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.todoItem}
            onPress={() => navigation.navigate('Details', item)}
          >
            <Text style={styles.todoText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  todoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  todoText: {
    fontSize: 18,
  },
});