import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { createGoal } from '../actions/GoalCreateActions';
import { Button, Card, CardSection, Spinner, DismissKeyboard } from './common';
import GoalForm from './GoalForm';

class CreateGoalForm extends Component {


  onButtonPress() {
    const { goalTitle, goalDescription, goalImage } = this.props;
    this.props.createGoal({ goalTitle, goalDescription, goalImage });
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

  render() {
    return (
        <Card>
          <GoalForm />
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
  return {
    goalTitle: state.goal.goalTitle,
    goalDescription: state.goal.goalDescription,
    goalImage: state.goal.goalImage,
    errorMessage: state.goal.errorMessage,
    isLoading: state.goal.isLoading
  };
};

export default connect(mapStateToProps, {
  goalTitleChanged,
  goalDescriptionChanged,
  goalImageChanged,
  createGoal
})(CreateGoalForm);
