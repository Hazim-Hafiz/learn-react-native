import { useState } from 'react';
import { View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
        return [{text: text, key: Math.random().toString()}, ...prevTodos ]
      })
    }
    else {
      Alert.alert('Error!', 'The string must be more than 3 characters',[
        {text: 'Ok', onPress: () => console.log('alert closed')}
      ])
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={tw.style('flex-1 bg-white')}>
        <Header />
        <View style={tw.style('p-8 flex-1')}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={tw.style('mt-5')}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} handleClick={handleClick} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
