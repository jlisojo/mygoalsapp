import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import {
  goalTitleChanged,
  goalDescriptionChanged,
  createGoal
} from '../actions/GoalCreateActions';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';

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
      <Card>
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
