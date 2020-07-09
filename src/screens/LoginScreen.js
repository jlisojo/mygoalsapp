import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from '../components/LoginForm';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;
