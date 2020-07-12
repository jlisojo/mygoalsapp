import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import * as RootNavigation from '../navigation/RootNavigation.js';
import { Button, Card, CardSection } from '../components/common';

class SettingsScreen extends Component {

  onLogoutButtonPress() {
    firebase.auth().signOut();
    RootNavigation.navigate('Login', { user: null });
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Button onPress={this.onLogoutButtonPress.bind(this)}>Log out</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
