import 'react-native-gesture-handler';
import React from 'react';
import AppRootNavigator from './AppRootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  AuthenticationProvider,
  TranslationProvider,
  useData,
  ThemeProvider,
} from '../hooks';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
// import CodePush from 'react-native-code-push';

export const AppNavigation = () => {
  const {isDark, theme, setTheme} = useData();

  const navigationTheme = {
    ...DefaultTheme,
    dark: isDark,
    colors: {
      ...DefaultTheme.colors,
      border: 'rgba(0,0,0,0)',
      text: String(theme.colors.text),
      card: String(theme.colors.card),
      primary: String(theme.colors.primary),
      notification: String(theme.colors.primary),
      background: String(theme.colors.background),
    },
  };

  return (
    <TranslationProvider>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <AuthenticationProvider>
          <SafeAreaProvider>
            <NavigationContainer theme={navigationTheme}>
              <AppRootNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </AuthenticationProvider>
      </ThemeProvider>
    </TranslationProvider>
  );
};

// let codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
//   installMode: CodePush.InstallMode.ON_NEXT_RESUME,
// };

// export default CodePush(codePushOptions)(App);
export default AppNavigation;
