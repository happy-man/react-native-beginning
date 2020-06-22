import React from 'react';
import {View, ScrollView, Text} from 'react-native';

export default function FlatListBasics() {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'powderblue', flex: 1}} />
      <View style={{backgroundColor: 'skyblue', flex: 2}} />
      <View style={{backgroundColor: 'steelblue', flex: 3, maxHeight: 100}} />
    </View>
  );
}
