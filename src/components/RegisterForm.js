import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import {
  registerEmailChanged,
  registerPasswordChanged,
  registerUser
} from '../actions/RegisterActions';
import { Header, Button, Card, CardSection, Input, Spinner } from './common';

class RegisterForm extends Component {

  onButtonPress() {
    const { registerEmail, registerPassword } = this.props;
    this.props.registerUser({ registerEmail, registerPassword });
  }

  renderButton() {
    if(this.props.isLoading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Register
      </Button>
    );
  }

  onRegisterEmailChange(text) {
    this.props.registerEmailChanged(text);
  }

  onRegisterPasswordChange(text) {
    this.props.registerPasswordChanged(text);
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
            value={this.props.registerEmail}
            onChangeText={this.onRegisterEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Password"
            secureTextEntry
            value={this.props.registerPassword}
            onChangeText={this.onRegisterPasswordChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Password"
            secureTextEntry
            value={this.props.registerPassword}
            onChangeText={this.onRegisterPasswordChange.bind(this)}
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
  registerContainer: {
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
    registerEmail: state.register.registerEmail,
    registerPassword: state.register.registerPassword,
    errorMessage: state.register.errorMessage,
    isLoading: state.register.isLoading
  };
};

export default connect(mapStateToProps, {
  registerEmailChanged,
  registerPasswordChanged,
  registerUser
})(RegisterForm);
