import React from 'react';
import {Platform} from 'react-native';
import {useAuthorization} from '../hooks';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  // CardStyleInterpolators,
} from '@react-navigation/stack';
import {SplashScreen} from '../screens';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootStack = createStackNavigator();
const AppRootStack = createStackNavigator();
// const AppMainStack = createStackNavigator();

const AppNavigator = () => {
  const {isLogin} = useAuthorization();

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={
        {
          // cardStyle: {backgroundColor: 'black'},
          // ...AuthTransition,
          // cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }
      }>
      {isLogin === 'signOut' ? (
        <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
      ) : (
        <RootStack.Screen name="MainNavigator" component={MainNavigator} />
      )}
    </RootStack.Navigator>
  );
};

const AppRootNavigator = () => {
  return (
    <AppRootStack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator: fadeConfig,
        // ...AnimationTranslateX
      }}>
      <AppRootStack.Screen name="SplashScreen" component={SplashScreen} />
      <AppRootStack.Screen name="AuthNavigator" component={AppNavigator} />
      {/*<AppRootStack.Screen name="MainNavigator" component={MainNavigator} />*/}
    </AppRootStack.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      {Platform.select({ios: AppRootNavigator(), android: AppRootNavigator()})}
    </NavigationContainer>
  );
};
export default AppContainer;
