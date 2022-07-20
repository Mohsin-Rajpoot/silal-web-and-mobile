import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const base_url="https://seller.dev.silal.app/";

export const API = {
    BASE_URL:base_url,
    LOGIN:'/login',  
    SIGNUP_Phone:'/auth_api/v1/sign_up/phone',
    Create_Store:'/api/v1/stores/' 
}

export const requestGet = (url, extraHeaders = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(base_url+url, {
            headers: {
                "Accept": "application/json",
                ...extraHeaders
            }
        }).then(response => {
            console.log('API', 'requestGet-success',url , response.data);
            resolve(response.data);
        }).catch(error => {
            console.log('API', 'requestGet-error', url,  error.response.data);
            reject(error);
        });
    });
}
export const requestPost = (url,data,isRaw,extraHeaders = {}) => {

   let formData = data || {}
    if(!isRaw && data){
        formData=new FormData();
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                formData.append(key,data[key])
            }
        }
    }
    return new Promise((resolve, reject) => {
        axios.post(base_url+url,formData,{
            headers: {
                "Accept": "application/json",
                ...extraHeaders
            }
        }).then(response => {
            console.log('API',url, 'requestPost-response.status', response.data);
            resolve(response.data);
        }).catch(error => {
            console.log('API',url, 'requestPost-error', error.response.data);
            reject(error);
        });
    });
}
axios.interceptors.request.use(
    async config => {
      const token =await AsyncStorage.getItem('isAuth')
      const requestConfig = config;
      requestConfig.headers = {
        Authorization: `Bearer ${token}`,
        "Accept": "application/json",
      };
    //   console.log('RESQUEST',config);
      return requestConfig;
    },
    err => {
      console.log('Error', err);
      return Promise.reject(err);
    },
  );