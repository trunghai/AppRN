import React, {useEffect} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {useAuthorization, useTheme} from '../../hooks';
import {useNavigation, StackActions} from '@react-navigation/native';

function SplashScreen() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {isLogin} = useAuthorization();
  const navigation = useNavigation();
  const {sizes} = useTheme();

  useEffect(() => {
    // if (isLogin === 'signOut') {
    //   navigation.dispatch(StackActions.replace('AuthNavigator'));
    // }
    // if (isLogin === 'loggedIn') {
    //   navigation.dispatch(StackActions.replace('MainNavigator'));
    // }
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('AuthNavigator'));
    }, 300);
  });

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'rgba(255, 255, 255, 0)'}
        // translucent
      />
      <Image
        source={require('../../../assets/splash.png')}
        style={{width: sizes.width, height: sizes.height}}
        // resizeMode={'cover'}
      />
    </View>
  );
}

export default SplashScreen;
