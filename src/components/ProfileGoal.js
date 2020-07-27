import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';
import * as RootNavigation from '../navigation/RootNavigation.js';

class ProfileGoal extends Component {

  onRowPress() {
    console.log("onRowPress");
    RootNavigation.navigate('GoalDetails', { goal: this.props.goal });
  }

  render() {
    const { goal } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.goalContainer}>
          <Image
            style={styles.image}
            source={{ uri: goal.goalImageURL }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{goal.goalTitle}</Text>
            <Text style={styles.description}>{goal.goalDescription}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  goalContainer: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
  },
  textContainer: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 12
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  }
});

export default ProfileGoal;
