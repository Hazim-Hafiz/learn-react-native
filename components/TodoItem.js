import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function TodoItem({ item, handleClick }){
    return (
        <TouchableOpacity onPress={() => handleClick(item.key)}>
            <View style={tw.style('flex-row p-4 mt-4 border-pink-600 border-2 rounded-md border-dashed')}>
                <MaterialIcons name="delete" size={24} color="pink" />
                <Text>{ item.text }</Text>
            </View>
        </TouchableOpacity>
    )
}