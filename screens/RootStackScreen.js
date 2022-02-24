import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPassScreen from './ForgotPass';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;