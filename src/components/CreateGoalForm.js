import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';

class CreateGoalForm extends Component {
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Goal Title"
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Goal Description"
          />
        </CardSection>
        <CardSection>
          <Button>
            Create Goal
          </Button>
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

export default CreateGoalForm;
