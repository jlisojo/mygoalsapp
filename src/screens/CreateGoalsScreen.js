import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CreateGoalsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Create Goals Screen</Text>
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
