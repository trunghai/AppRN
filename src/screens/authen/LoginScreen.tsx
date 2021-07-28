import React from 'react';
import {Platform} from 'react-native';
import {Text, Block, Button, Input} from '../../components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useAuthorization, useTheme, useTranslation} from '../../hooks';

const isAndroid = Platform.OS === 'android';

const LoginScreen = () => {
  // const {login} = useAuthorization();
  const {sizes} = useTheme();
  const {t} = useTranslation();

  React.useEffect(() => {
    // console.log(JSON.stringify(fonts));
  });

  return (
    <Block flex={1} justify={'center'}>
      <Input
        autoCapitalize="none"
        marginBottom={sizes.m}
        marginHorizontal={sizes.sm}
        label={t('common.name')}
        placeholder={t('common.namePlaceholder')}
        // success={Boolean(registration.name && isValid.name)}
        // danger={Boolean(registration.name && !isValid.name)}
        onChangeText={() => {}}
      />
      <Button
        primary
        outlined
        shadow={!isAndroid}
        marginVertical={sizes.s}
        marginHorizontal={sizes.sm}
        onPress={() => {}}>
        <Text bold primary transform="uppercase">
          {t('common.signup')}
        </Text>
      </Button>
    </Block>
  );
};

export default LoginScreen;
