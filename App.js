import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StatusBar } from 'expo-status-bar';
import { Header, Button, Spinner, Card, CardSection } from './src/components/common';
// import LoginForm from './src/components/LoginForm';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import reducers from './src/reducers';

// const BottomTabNavigatorConfig = {
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//     labelStyle: {
//       fontSize: 12,
//     },
//     style: {
//       backgroundColor: 'blue',
//     },
//   },
//   defaultNavigationOptions: {
//     tabBarVisible: true,
//   }
// };

// const AuthenticationNavigator = createBottomTabNavigator({
//   login: { screen: LoginScreen },
//   register: { screen: RegisterScreen }
// }, BottomTabNavigatorConfig);

// const AppNavigator = createBottomTabNavigator({
//   auth: AuthenticationNavigator,
// }, BottomTabNavigatorConfig);

const Tab = createBottomTabNavigator();

class App extends Component {

  state = { loggedIn: null, uid: null };

  componentDidMount() {
    // Firebase configuration
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

  // renderContent() {
  //   switch(this.state.loggedIn) {
  //     case true:
  //       return (
  //         <Card>
  //           <CardSection>
  //             <Button onPress={this.createData.bind(this)}>
  //               Create Data
  //             </Button>
  //           </CardSection>
  //           <CardSection>
  //             <Button onPress={() => firebase.auth().signOut()}>
  //               Log Out
  //             </Button>
  //           </CardSection>
  //         </Card>
  //       );
  //     case false:
  //       return <LoginForm />;
  //     default:
  //       return <Spinner size="large" />
  //   }
  // }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Register" component={RegisterScreen} />
          </Tab.Navigator>
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
