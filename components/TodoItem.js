import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function TodoItem({ item, handleClick }){
    return (
        <TouchableOpacity onPress={() => handleClick(item.key)}>
            <Text style={tw.style('p-4 mt-4 border-pink-600 border-2 rounded-md border-dashed')}>{ item.text }</Text>
        </TouchableOpacity>
    )
}