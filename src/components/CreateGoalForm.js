import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import {
  goalTitleChanged,
  goalDescriptionChanged,
  createGoal
} from '../actions/GoalCreateActions';
import { Header, Button, Card, CardSection, Input, Spinner, DismissKeyboard } from './common';

class CreateGoalForm extends Component {

  onButtonPress() {
    const { goalTitle, goalDescription } = this.props;
    this.props.createGoal({ goalTitle, goalDescription });
  }

  renderButton() {
    if(this.props.isLoading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Create Goal
      </Button>
    );
  }

  onGoalTitleChanged(text) {
    this.props.goalTitleChanged(text);
  }

  onGoalDescriptionChanged(text) {
    this.props.goalDescriptionChanged(text);
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Card>
          <CardSection>
            <View style={styles.imageBorder}></View>
          </CardSection>
          <CardSection>
            <Input
              placeholder="Goal Title"
              value={this.props.goalTitle}
              onChangeText={this.onGoalTitleChanged.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Goal Description"
              value={this.props.goalDescription}
              onChangeText={this.onGoalDescriptionChanged.bind(this)}
            />
          </CardSection>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapErrorMessage: {
    backgroundColor: 'white'
  },
  errorMessage: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
  imageBorder: {
    width: 250,
    height: 250,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 6,
    alignSelf: 'center',
  }
});

const mapStateToProps = state => {
  return {
    goalTitle: state.goal.goalTitle,
    goalDescription: state.goal.goalDescription,
    errorMessage: state.goal.errorMessage,
    isLoading: state.goal.isLoading
  };
};

export default connect(mapStateToProps, {
  goalTitleChanged,
  goalDescriptionChanged,
  createGoal
})(CreateGoalForm);
