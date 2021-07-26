import React from 'react';
import {Text, View, Button} from 'react-native';
import {useAuthorization} from '../../hooks';

const LoginScreen = () => {
  const {login} = useAuthorization();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Login Screen'}</Text>
      <Button
        title={'Đăng nhập'}
        onPress={() => {
          login(JSON.stringify({username: '123456'}));
        }}
      />
    </View>
  );
};

export default LoginScreen;
