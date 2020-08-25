import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ProfileGoalsList from '../components/ProfileGoalsList';

class EditProfileModalScreen extends Component {

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
