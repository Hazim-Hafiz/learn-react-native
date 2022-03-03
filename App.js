import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Hazim')
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text></Text>
      <View>
        <Button title="change value" onPress={() => setName('another name')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    marginTop: -40,
    height: 80, 
    width: 200,
    borderRadius: 50,
    backgroundColor: 'pink'
  },  
  header: {
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 15,
    height: 300,
    width: 300,
    marginTop: -10
  },
  bold: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  body: {
    height: 200,
    width: 250,
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  textbody: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 5,
    color: 'black'
  },
  poll: {
    marginTop: -10,
    backgroundColor: 'pink',
    height: 200,
    width: 20,
    borderRadius: 15,
  }
});
