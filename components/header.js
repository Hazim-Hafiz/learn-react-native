import { Text, View } from 'react-native';
import tw from 'twrnc';

export default Header = () => {
    return (
        <View style={tw.style('bg-pink-300 h-20')}>
            <Text style={tw.style('text-white text-center mt-10 ml-2 text-lg font-bold')}>Todos App</Text>
        </View>
    )
}