import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput, Text } from 'react-native';
import tw from 'twrnc';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={tw.style('mb-2 px-2 py-2 border-2 border-pink-200')} 
        placeholder='new todo...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <TouchableOpacity style={tw.style('bg-pink-300 h-10 rounded-md')} onPress={() => submitHandler(text)}>
        <Text style={tw.style('text-center text-white justify-center pt-2')}>add todo</Text>
      </TouchableOpacity>
    </View>
  );
}