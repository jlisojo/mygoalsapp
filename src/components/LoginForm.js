import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { loginEmailChanged, loginPasswordChanged } from '../actions';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

  state = {
    errorMessage: '',
    loading: false
  }

  onButtonPress() {
    const { loginEmail, loginPassword } = this.state;
    this.setState({ errorMessage: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPassword)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ errorMessage: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', errorMessage: '', loading: false });
  }

  renderButton() {
    if(this.state.loading) {
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
        <Text style={styles.errorTextStyle}>{this.state.errorMessage}</Text>
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
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  }
});

const mapStateToProps = state => {
  return {
    loginEmail: state.login.loginEmail
  };
};

export default connect(mapStateToProps, { loginEmailChanged, loginPasswordChanged })(LoginForm);
