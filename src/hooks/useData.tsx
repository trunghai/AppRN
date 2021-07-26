import React, {useCallback, useContext, useEffect, useState} from 'react';
import {light} from '../constants';
import {IUseData, ITheme} from '../constants/types';
import {getDataAsyncStorage, setDataAsyncStorage} from '../utils/AsyncStorage';

export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState<ITheme>(light);

  // get isDark mode from storage
  const getIsDark = useCallback(async () => {
    // get preferance gtom storage
    const isDarkJSON = await getDataAsyncStorage('isDark');

    if (isDarkJSON !== null && isDarkJSON === 'isDark') {
      // set isDark / compare if has updated
      setIsDark(true);
    }
  }, [setIsDark]);

  // handle isDark mode
  const handleIsDark = useCallback(
    (payload: boolean) => {
      // set isDark / compare if has updated
      setIsDark(payload);
      // save preferance to storage
      setDataAsyncStorage('isDark', '');
    },
    [setIsDark],
  );

  // get initial data for: isDark & language
  useEffect(() => {
    getIsDark();
  }, [getIsDark]);

  // change theme based on isDark updates
  useEffect(() => {
    setTheme(isDark ? light : light);
  }, [isDark]);

  const contextValue = {
    isDark,
    handleIsDark,
    theme,
    setTheme,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext) as IUseData;
