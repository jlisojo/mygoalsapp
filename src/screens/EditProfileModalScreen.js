import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ProfileGoalsList from '../components/ProfileGoalsList';

class EditProfileModalScreen extends Component {

  _onPressButton() {
    // this.props.navigation.navigate('EditProfileModalScreen');
  }

  render() {
    // console.log("ProfileScreen");
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/josh.jpg')}
        />
        <Text style={styles.userName}>Joshua Lisojo</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EditProfileModalScreen;
