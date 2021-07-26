import React from 'react';
import {Text, View, Button} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useAuthorization, useTheme, useData} from '../../hooks';

const LoginScreen = () => {
  const {login} = useAuthorization();
  // const {colors, sizes, gradients, fonts} = useTheme();
  // const {theme} = useData();

  React.useEffect(() => {
    // console.log(JSON.stringify(fonts));
  });

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
