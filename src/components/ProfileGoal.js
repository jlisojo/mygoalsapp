import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';

class ProfileGoal extends Component {


  render() {
    return (
      <View style={styles.goalContainer}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goalContainer: {
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 12
  }
});

export default ProfileGoal;
