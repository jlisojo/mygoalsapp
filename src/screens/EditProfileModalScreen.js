import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, DismissKeyboard } from '../components/common';
import ProfileGoalsList from '../components/ProfileGoalsList';

class EditProfileModalScreen extends Component {

  renderImage() {
    if(true) {
      const profileImage = '../../assets/josh.jpg';
      return <Image
                style={styles.profileImage}
                resizeMode="cover"
                source={require(profileImage)}
              />;
    }
  }

  _pickImage = async () => {
    // try {
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });
    //   if (!result.cancelled) {
    //     this.props.goalUpdate({ prop: 'prevGoalImage', value: this.props.goalImage });
    //     this.props.goalUpdate({ prop: 'goalImage', value: result.uri });
    //     this.props.goalUpdate({ prop: 'hasNewGoalImage', value: true });
    //   }
    // } catch (E) {
    //   console.log(E);
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            {this.renderImage()}
          </CardSection>
          <CardSection>
            <Input
              placeholder="Full Name"
            />
          </CardSection>
          <CardSection>
             <Button>Pick Image</Button>
          </CardSection>
          <CardSection>
             <Button>Save</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 6,
    marginTop: 30,
    marginBottom: 30,
  },
  userName: {
    alignSelf: 'center',
  }
});

export default EditProfileModalScreen;
