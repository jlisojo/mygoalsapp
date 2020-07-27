import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';

class ProfileGoal extends Component {


  render() {
    return (
      <View style={styles.goalContainer}>
        <Image
          style={styles.image}
          source={{ uri: this.props.image }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
      </View>
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
