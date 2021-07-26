import 'react-native-gesture-handler';
import React, {useState} from 'react';
import AppContainer from './navigation';
import {AppState} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthenticationProvider, TranslationProvider} from './hooks';
// import CodePush from 'react-native-code-push';

export const App = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  React.useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  });

  const _handleAppStateChange = (nextAppState: any) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      // console.log('App has come to the foreground!');
    }
    setAppState(nextAppState);
  };

  return (
    <TranslationProvider>
      <AuthenticationProvider>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </AuthenticationProvider>
    </TranslationProvider>
  );
};

// let codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
//   installMode: CodePush.InstallMode.ON_NEXT_RESUME,
// };

// export default CodePush(codePushOptions)(App);
export default App;
