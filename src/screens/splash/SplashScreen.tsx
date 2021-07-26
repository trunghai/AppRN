import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTranslation, useAuthorization} from '../../hooks';
import {useNavigation, StackActions} from '@react-navigation/native';

function SplashScreen() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {isLogin} = useAuthorization();
  const {t} = useTranslation();
  const navigation = useNavigation();

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
      <Text>{'Splash Screen'}</Text>
      <Text>{t('common.register')}</Text>
    </View>
  );
}

export default SplashScreen;
