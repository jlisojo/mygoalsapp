import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StatusBar } from 'expo-status-bar';
import { Header, Button, Spinner, Card, CardSection } from './src/components/common';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CreateGoalsScreen from './src/screens/CreateGoalsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import reducers from './src/reducers';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Create Goals" component={CreateGoalsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function AuthenticationTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Main" component={MainTabs} />
    </Tab.Navigator>
  );
}

class App extends Component {

  state = { loggedIn: null, uid: null };

  componentDidMount() {
    ///////////////////////////////////////
    // Firebase configuration
    ///////////////////////////////////////
    const firebaseConfig = {
      apiKey: "AIzaSyAPnfso3y6m659HHaI3qUs17p4cPxP9_Xg",
      authDomain: "mygoalsapp-5bb86.firebaseapp.com",
      databaseURL: "https://mygoalsapp-5bb86.firebaseio.com",
      projectId: "mygoalsapp-5bb86",
      storageBucket: "mygoalsapp-5bb86.appspot.com",
      messagingSenderId: "79439276994",
      appId: "1:79439276994:web:2cdd1df5b9f9a8e20c845b",
      measurementId: "G-EGT5P2WJ9H"
    };

    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // firebase.auth().onAuthStateChanged((user) => {
    //   // console.log(user);
    //   if(user) {
    //     this.setState({ loggedIn: true, uid: user.uid });
    //   } else {
    //     this.setState({ loggedIn: false, uid: null });
    //   }
    // });
  }

  // createData() {
  //   const { currentUser } = firebase.auth();
  //   var dreamId = 200;
  //   firebase.database().ref(`/users/${currentUser.uid}/dreams`)
  //     .push({title: "Dream Two", description: "Lets finish this!"});
  // }
  //
  // readData(user) {
  // }
  //
  // updateData(dream) {
  // }
  //
  // deleteData(dream) {
  // }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MyGoals" component={AuthenticationTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
