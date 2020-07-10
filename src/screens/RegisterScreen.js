import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from '../components/RegisterForm';

class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RegisterForm navigation={this.props.navigation} />
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

export default RegisterScreen;
