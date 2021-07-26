import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTransparent: false,
        // cardStyle: {backgroundColor: 'black'},
      }}>
      <AuthStack.Screen name={'LoginScreen'} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
