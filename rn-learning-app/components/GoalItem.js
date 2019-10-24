import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
  return (
    <View style={style.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 2,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;
