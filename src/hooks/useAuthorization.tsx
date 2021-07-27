import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  setDataAsyncStorage,
  removeDataAsyncStorageItem,
  getDataAsyncStorage,
} from '../utils/storage';
import {
  ASYNC_STORAGE_KEY_IS_LOGIN,
  ASYNC_STORAGE_KEY_USER_INFO,
} from '../constants/common';
import {IAuthorization} from '../constants/types';

export const AuthenticationContext = React.createContext({});

export const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogin, setIsLogin] = useState('signOut');

  const actions = React.useMemo(
    () => ({
      login: (data: string) => {
        setDataAsyncStorage(ASYNC_STORAGE_KEY_IS_LOGIN, 'loggedIn');
        setDataAsyncStorage(ASYNC_STORAGE_KEY_USER_INFO, data);
        setIsLogin('loggedIn');
      },
      logout: () => {
        setDataAsyncStorage(ASYNC_STORAGE_KEY_IS_LOGIN, 'signOut');
        removeDataAsyncStorageItem(ASYNC_STORAGE_KEY_USER_INFO).then(r => {
          if (r === 'Success') {
            setIsLogin('signOut');
          }
        });
      },
    }),
    [setIsLogin],
  );

  const getIslogin = useCallback(async () => {
    // get preferance gtom storage
    const isLoginJSON = await getDataAsyncStorage(ASYNC_STORAGE_KEY_IS_LOGIN);
    // console.log(`isLogin 1: ${isLogin}`);
    // @ts-ignore
    setIsLogin(isLoginJSON !== null ? isLoginJSON : 'signOut');
  }, [setIsLogin]);

  useEffect(() => {
    getIslogin();
    // console.log(`isLogin 2: ${isLogin}`);
  }, [getIslogin]);

  useEffect(() => {
    // save preferance to storage
    setDataAsyncStorage(ASYNC_STORAGE_KEY_IS_LOGIN, isLogin);
    // console.log(`isLogin 3: ${isLogin}`);
  }, [isLogin]);

  const contextValue = {
    isLogin,
    setIsLogin,
    ...actions,
  };
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthorization = () => {
  const context = useContext(AuthenticationContext) as IAuthorization;
  if (!context) {
    throw new Error('useAuth must be inside a Provider with a value');
  }
  return context;
};
