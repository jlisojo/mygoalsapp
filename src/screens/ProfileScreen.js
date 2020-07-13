import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ProfileGoal from '../components/ProfileGoal';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/josh.jpg')}
        />
        <Text style={styles.userName}>Joshua Lisojo</Text>
        <ProfileGoal />
        <ProfileGoal />
        <ProfileGoal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    alignSelf: 'center',
    marginTop: 15,
  },
  userName: {
    padding: 15,
    alignSelf: 'center',
  }
});

export default ProfileScreen;
