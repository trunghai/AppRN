import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuthorization} from '../../hooks';

const HomeScreen = () => {
  const {logout} = useAuthorization();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Home Screen'}</Text>
      <Button
        title={'Đăng xuất'}
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default HomeScreen;
