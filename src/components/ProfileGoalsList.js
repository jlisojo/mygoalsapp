import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import ProfileGoal from './ProfileGoal';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';
import { fetchGoals } from '../actions/GoalCreateActions';
import { GOALS_DATA } from '../data/GoalsData';

class ProfileGoalsList extends Component {

  componentDidMount() {
    this.props.fetchGoals();
  }

  renderItem({ item }) {
    // console.log(this.props.goalsData);
    return <ProfileGoal title={this.props.goalsData[item].goalTitle} description={this.props.goalsData[item].goalDescription} />;
  }

  extractKey(item, index) {
    // console.log(item);
    return item;
  }

  getData() {
    if(this.props.goalsData) {
      return Object.keys(this.props.goalsData);
    }

    return [];
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.getData.bind(this)}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.extractKey.bind(this)}
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

const mapStateToProps = state => {
  return {
    goalsData: state.goals.goalsData
  };
};

export default connect(mapStateToProps, { fetchGoals })(ProfileGoalsList);
