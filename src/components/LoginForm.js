import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import {
  loginEmailChanged,
  loginPasswordChanged,
  loginUser
} from '../actions';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

  onButtonPress() {
    const { loginEmail, loginPassword } = this.props;
    this.props.loginUser({ loginEmail, loginPassword });
  }

  renderButton() {
    if(this.props.isLoading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  onLoginEmailChange(text) {
    this.props.loginEmailChanged(text);
  }

  onLoginPasswordChange(text) {
    this.props.loginPasswordChanged(text);
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if(errorMessage) {
      return (
        <View style={styles.wrapErrorMessage}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Email"
            value={this.props.loginEmail}
            onChangeText={this.onLoginEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Password"
            secureTextEntry
            value={this.props.loginPassword}
            onChangeText={this.onLoginPasswordChange.bind(this)}
          />
        </CardSection>
        {this.renderErrorMessage()}
        <CardSection>
          {this.renderButton()}
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

const mapStateToProps = state => {
  return {
    loginEmail: state.login.loginEmail,
    loginPassword: state.login.loginPassword,
    errorMessage: state.login.errorMessage,
    isLoading: state.login.isLoading
  };
};

export default connect(mapStateToProps, {
  loginEmailChanged,
  loginPasswordChanged,
  loginUser
})(LoginForm);
