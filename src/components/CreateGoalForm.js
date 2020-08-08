import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import {
  goalTitleChanged,
  goalDescriptionChanged,
  goalImageChanged,
  createGoal
} from '../actions/GoalCreateActions';
import { Header, Button, Card, CardSection, Input, Spinner, DismissKeyboard } from './common';

class CreateGoalForm extends Component {

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        //this.setState({ image: result.uri });
        //this.props.goalImage = result.uri;
        //console.log(result);
        this.props.goalImageChanged(result);
      }

      // console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  renderImage() {
    if(this.props.goalImage) {
      const { goalImage } = this.props;
      return <Image
                style={styles.goalImageStyle}
                resizeMode="cover"
                source={{ uri: goalImage.uri }}
              />;
    }

    return (
      <View style={styles.imageBorder}></View>
    );
  }

  onButtonPress() {
    const { goalTitle, goalDescription, goalImage } = this.props;
    this.props.createGoal({ goalTitle, goalDescription, goalImage });
  }

  renderButton() {
    if(this.props.isLoading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Create Goal
      </Button>
    );
  }

  onGoalTitleChanged(text) {
    this.props.goalTitleChanged(text);
  }

  onGoalDescriptionChanged(text) {
    this.props.goalDescriptionChanged(text);
  }

  render() {
    return (
        <Card>
          <CardSection>
            {this.renderImage()}
          </CardSection>
          <CardSection>
            <Input
              placeholder="Goal Title"
              value={this.props.goalTitle}
              onChangeText={this.onGoalTitleChanged.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Goal Description"
              value={this.props.goalDescription}
              onChangeText={this.onGoalDescriptionChanged.bind(this)}
            />
          </CardSection>
          <CardSection>
             <Button onPress={this._pickImage}>Pick Image</Button>
          </CardSection>
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
  },
  imageBorder: {
    width: 250,
    height: 250,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 6,
    borderStyle: 'dashed',
    alignSelf: 'center',
  },
  goalImageStyle: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 6,
  }
});

const mapStateToProps = state => {
  return {
    goalTitle: state.goal.goalTitle,
    goalDescription: state.goal.goalDescription,
    goalImage: state.goal.goalImage,
    errorMessage: state.goal.errorMessage,
    isLoading: state.goal.isLoading
  };
};

export default connect(mapStateToProps, {
  goalTitleChanged,
  goalDescriptionChanged,
  goalImageChanged,
  createGoal
})(CreateGoalForm);
