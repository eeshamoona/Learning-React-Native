import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentGoals =>[
      ...currentGoals,
      {key: Math.random().toString(), value: enteredGoal}
    ]);
  };
  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={style.textInputContainer}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList
        data = {courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInputContainer: {
    width: '80%',
    borderColor: 'black',
    borderBottomWidth: 1
  }
});
