import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import tw from 'twrnc';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);


  const handleClick = (key) => {
    setTodos((prev) => {
      return prev.filter(person => person.key !== key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3)
    {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos]
      })
    }
    else {
      Alert.alert('Error!', 'The string must be more than 3 characters',[
        {text: 'Ok', onPress: () => console.log('alert closed')}
      ])
    }
    
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handleClick={handleClick} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});