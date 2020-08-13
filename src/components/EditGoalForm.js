import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as firebase from 'firebase';
import { editGoal, goalUpdate } from '../actions/GoalCreateActions';
import { Button, Card, CardSection, Spinner, DismissKeyboard } from './common';
import GoalForm from './GoalForm';

class EditGoalForm extends Component {

  constructor(props) {
    super(props);
    console.log("EditGoalForm");
    _.each(this.props.route.params.goal, (value, prop) => {
      // console.log(prop + " => " + value);
      this.props.goalUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { goalTitle, goalDescription, fileName, hasNewGoalImage, goalImage, goalID } = this.props;
    this.props.editGoal({ goalTitle, goalDescription, fileName, hasNewGoalImage, goalImage, goalID });
  }

  renderButton() {
    if(this.props.isLoading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Update Goal
      </Button>
    );
  }

  render() {
    return (
        <Card>
          <GoalForm {...this.props} />
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
    goalID: state.goal.goalID,
    goalTitle: state.goal.goalTitle,
    goalDescription: state.goal.goalDescription,
    fileName: state.goal.fileName,
    goalImage: state.goal.goalImage,
    prevGoalImage: state.goal.prevGoalImage,
    hasNewGoalImage: state.goal.hasNewGoalImage,
    errorMessage: state.goal.errorMessage,
    isLoading: state.goal.isLoading
  };
};

export default connect(mapStateToProps, { editGoal, goalUpdate })(EditGoalForm);
