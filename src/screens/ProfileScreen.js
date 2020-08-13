import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ProfileGoalsList from '../components/ProfileGoalsList';

class ProfileScreen extends Component {
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
        <ProfileGoalsList navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop: 15,
  },
  userName: {
    padding: 15,
    alignSelf: 'center',
  }
});

export default ProfileScreen;
