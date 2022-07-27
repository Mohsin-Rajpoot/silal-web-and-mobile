import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const base_url = "https://seller.dev.silal.app/";

export const requestGet = (url, extraHeaders = {}) => {
  return new Promise((resolve, reject) => {
    var config = {
      method: "get",
      url: base_url + url,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: false,
    };
    axios(config)
      .then((response) => {
        console.log("API", "requestGet-success", url, response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log("API", "requestGet-error", url, error.response.data);
        reject(error);
      });
  });
};
export const requestPost = (url, data, isRaw, extraHeaders = {}) => {
  let formData = data || {};
  if (!isRaw && data) {
    formData = new FormData();
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key]);
      }
    }
  }

  return new Promise(async (resolve, reject) => {
    let token = await AsyncStorage.getItem("isAuth");
    console.log("----Token", token);
    var config = {
      method: "post",
      url: base_url + url,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: false,
      data: formData,
    };
    axios(config)
      .then((response) => {
        console.log("API", url, "requestPost-response.status", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log("API", url, "requestPost-error", error.response.data);
        reject(error);
      });
  });
};
export const requestPut = (url, data, isRaw, extraHeaders = {}) => {
  let formData = data || {};
  if (!isRaw && data) {
    formData = new FormData();
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key]);
      }
    }
  }
  return new Promise((resolve, reject) => {
    axios
      .put(base_url + url, formData, {
        headers: {
          Accept: "application/json",
          ...extraHeaders,
        },
      })
      .then((response) => {
        console.log("API", url, "requestPost-response.status", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log("API", url, "requestPost-error", error.response.data);
        reject(error);
      });
  });
};

axios.interceptors.request.use(
  async (config) => {
    const requestConfig = config;
    console.log("RESQUEST", config);
    return requestConfig;
  },
  (err) => {
    console.log("Error", err);
    return Promise.reject(err);
  }
);
