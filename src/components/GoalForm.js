import React, { Component } from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import { goalUpdate } from '../actions/GoalCreateActions';
import { Button, CardSection, Input } from './common';

class GoalForm extends Component {

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
        this.props.goalUpdate({ prop: 'prevGoalImage', value: this.props.goalImage });
        this.props.goalUpdate({ prop: 'goalImage', value: result.uri });
        this.props.goalUpdate({ prop: 'hasNewGoalImage', value: true });
      }
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
                source={{ uri: goalImage }}
              />;
    }

    return (
      <View style={styles.imageBorder}></View>
    );
  }

  render() {
    return (
        <View>
          <CardSection>
            {this.renderImage()}
          </CardSection>
          <CardSection>
            <Input
              placeholder="Goal Title"
              value={this.props.goalTitle}
              onChangeText={value => this.props.goalUpdate({ prop: 'goalTitle', value })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Goal Description"
              value={this.props.goalDescription}
              onChangeText={value => this.props.goalUpdate({ prop: 'goalDescription', value })}
            />
          </CardSection>
          <CardSection>
             <Button onPress={this._pickImage}>Pick Image</Button>
          </CardSection>
        </View>
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
    goalID: state.goal.goalID,
    goalTitle: state.goal.goalTitle,
    goalDescription: state.goal.goalDescription,
    fileName: state.goal.fileName,
    goalImage: state.goal.goalImage,
    prevGoalImage: state.goal.prevGoalImage,
    hasNewGoalImage: state.goal.hasNewGoalImage,
    errorMessage: state.goal.errorMessage,
    isLoading: state.goal.isLoading
  };
};

export default connect(mapStateToProps, { goalUpdate })(GoalForm);
