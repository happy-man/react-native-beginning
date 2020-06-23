import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('Rost');
  const [person, setPerson] = useState({name: 'Johnny', age: 28});

  const clickHandler = () => {
    setName('Bobby');
    setPerson({name: 'Zeus', age: 100});
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update name" onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});
