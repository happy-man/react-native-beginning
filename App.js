import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Rost');
  const [age, setAge] = useState(22);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Enter your name:"
        onChangeText={val => setName(val)}
      />

      <Text>Enter Age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your age:"
        onChangeText={val => setAge(val)}
      />

      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
