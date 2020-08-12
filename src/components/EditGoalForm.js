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
      console.log(prop + " => " + value);
      this.props.goalUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { goalTitle, goalDescription, goalImage, key } = this.props;
    console.log(goalTitle, goalDescription, goalImage, key);
    // this.props.editGoal({ goalTitle, goalDescription, goalImage, key });
  }

  renderButton() {
    if(this.props.isLoading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Save Goal
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
    key: state.goal.key,
    goalTitle: state.goal.goalTitle,
    goalDescription: state.goal.goalDescription,
    goalImage: state.goal.goalImage,
    errorMessage: state.goal.errorMessage,
    isLoading: state.goal.isLoading
  };
};

export default connect(mapStateToProps, { editGoal, goalUpdate })(EditGoalForm);
