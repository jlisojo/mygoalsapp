import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ProfileGoalsList from '../components/ProfileGoalsList';

class ProfileScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/josh.jpg')}
        />
        <Text style={styles.userName}>Joshua Lisojo</Text>

        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('EditProfileModalScreen'); }} style={styles.profileButton}
        >
          <Text style={styles.profileButtonText}>Edit Profile</Text>
        </TouchableOpacity>

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
  },
  profileButtonText: {
    fontSize: 12,
    color: "#00f",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  profileButton: {

    padding: 5,
    fontSize: 12,
    width: 100,
    alignSelf: "center",
  }
});

export default ProfileScreen;
