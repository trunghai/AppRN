import 'react-native-gesture-handler';
import React, {useState, useCallback} from 'react';
import AppNavigation from './navigation';
import {AppState, AppStateStatus} from 'react-native';
import {DataProvider} from './hooks';
// import CodePush from 'react-native-code-push';

export const App = () => {
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState,
  );

  const _handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        // console.log('App has come to the foreground!');
      }
      setAppState(nextAppState);
      // console.log(`appState: ${appState} nextAppState: ${nextAppState}`);
    },
    [appState, setAppState],
  );

  React.useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  });

  return (
    <DataProvider>
      <AppNavigation />
    </DataProvider>
  );
};

// let codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
//   installMode: CodePush.InstallMode.ON_NEXT_RESUME,
// };

// export default CodePush(codePushOptions)(App);
export default App;
