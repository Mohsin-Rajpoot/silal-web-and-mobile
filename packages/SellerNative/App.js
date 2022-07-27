import React, {useEffect} from 'react';
import Routes from './src/routes';
import {NativeBaseProvider} from 'native-base';
import {ToastProvider} from 'react-native-toast-notifications';
import {Icon} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import Preference from 'react-native-preference';
import {useTranslation} from 'react-i18next';
import {store, persistor} from '@SilalApp/common/Store/SellerStore/nativeStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
const App = () => {
  const {i18n} = useTranslation();
  const getLang = Preference.get('languageValue');
  useEffect(() => {
    i18n.changeLanguage(getLang ? getLang : 'en');
  }, []);
  return (
    <>
      <NativeBaseProvider>
        <ToastProvider
          duration={5000}
          normalColor="#fff"
          textStyle={{color: colors.black}}
          placement="bottom"
          icon={
            <Icon
              name="check-circle"
              type="materialIcons"
              color={colors.light_green}
              size={30}
            />
          }
          renderType={{
            custom_type: toast => (
              <View
                style={{
                  paddingHorizontal: 20,
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                }}>
                <Text>{toast.message}</Text>
              </View>
            ),
          }}>
          <MenuProvider>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Routes />
              </PersistGate>
            </Provider>
          </MenuProvider>
        </ToastProvider>
      </NativeBaseProvider>
    </>
  );
};

export default App;

// import axios from 'axios';
// import React from 'react';
// import { View, Text } from 'react-native';
// import Routes from './src/routes';
// const App = () => {
//   React.useEffect(() => {
//     var data = JSON.stringify({
//       "first_name": "Shoaib",
//       "last_name": "Sialkot",
//       "id_number": 12321312
//     });
//     var config = {
//       method: 'post',
//       url: 'https://seller.dev.silal.app//api/v1/personal_info',
//       headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsImlhdCI6MTY1ODczMTAxNSwiZXhwIjoxNjY2NTA3MDE1fQ.eyJiZWFyZXIgY29uZmlybWF0aW9uIjoiMzQxNjU4NzIwMjE1OTMwODYxIn0._15U0JLMhi3c2Rzq46_OS1HTsm-JtGihCaJzKM2jH7LJhNJmNqz1JU01hF-QruZ_3mabbt3rfv6d5gQcm2HYJQ',
//         'Content-Type': 'application/json'
//       },
//       data : data
//     };
//     axios(config)
//     .then(function (response) {
//       console.log("____", JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }, []);
//   return (
//   <View><Text>Hello</Text></View>
//   )
// };
// export default App;