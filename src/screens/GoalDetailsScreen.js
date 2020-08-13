import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import EditGoalForm from '../components/EditGoalForm';

class GoalDetailsScreen extends Component {
  render() {
    // console.log("GoalDetailsScreen");
    // console.log(this.props);
    return (

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
        <EditGoalForm {...this.props} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GoalDetailsScreen;
