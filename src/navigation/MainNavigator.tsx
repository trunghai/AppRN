import React from 'react';
import {
  createStackNavigator,
  // CardStyleInterpolators,
} from '@react-navigation/stack';
import {HomeScreen} from '../screens';
import {Platform} from 'react-native';

const AppMainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <AppMainStack.Navigator
      // screenOptions={HeaderCustom}
      // animation={'fade'}
      headerMode={Platform.select({ios: 'float', android: 'screen'})}>
      <AppMainStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // headerRight: () => <SignOutButton />,
          headerShown: true,
          headerTransparent: false,
        }}
      />
    </AppMainStack.Navigator>
  );
};

export default MainNavigator;
