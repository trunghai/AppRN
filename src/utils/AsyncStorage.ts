import AsyncStorage from '@react-native-community/async-storage';
// @ts-ignore
import CryptoJS from 'crypto-js';
import {SECRET_KEY} from '../constants/AppConstant';

let isSuccess = 'Success';
let isFailure = 'Failure';

export function getDataAsyncStorage(key: string) {
  return new Promise(async function (resolve, reject) {
    try {
      let data = await AsyncStorage.getItem('@MyInfoStore_' + key);
      if (data === null) {
        resolve('');
      } else {
        // let decrypted = CryptoJS.AES.decrypt(data.toString(), SECRET_KEY);
        let bytes = CryptoJS.AES.decrypt(data.toString(), SECRET_KEY);
        let plaintext = bytes.toString(CryptoJS.enc.Utf8);
        resolve(plaintext);
      }
    } catch (error) {
      reject(isFailure);
    }
  });
}

export async function removeDataAsyncStorageItem(key: string) {
  // await AsyncStorage.removeItem("@MyInfoStore_"+key);
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.removeItem('@MyInfoStore_' + key).then(() => {
        resolve(isSuccess);
      });
    } catch (e) {
      reject(isFailure);
    }
  });
}

export function setDataAsyncStorage(key: string, value: {toString: () => any}) {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log("key: " + key + ", value: " + value);
      let encrypted = CryptoJS.AES.encrypt(value.toString(), SECRET_KEY);
      await AsyncStorage.setItem(
        '@MyInfoStore_' + key,
        encrypted.toString(),
      ).then(() => {
        // console.log("data: "+encrypted);
        resolve(isSuccess);
      });
    } catch (error) {
      reject(error.toString());
    }
  });
}
