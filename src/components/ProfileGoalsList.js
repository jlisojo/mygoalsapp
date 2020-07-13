import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, StatusBar } from 'react-native';
import ProfileGoal from './ProfileGoal';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';
import { GOALS_DATA } from '../data/GoalsData';

class ProfileGoalsList extends Component {

  renderItem({ item }) {
    return <ProfileGoal title={item.title} description={item.description} />;
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={GOALS_DATA}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ccc',
  },
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

export default ProfileGoalsList;
