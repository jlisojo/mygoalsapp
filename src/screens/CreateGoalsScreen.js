import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateGoalForm from '../components/CreateGoalForm';

class CreateGoalsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CreateGoalForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateGoalsScreen;
