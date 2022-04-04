import React, {useEffect} from 'react';
import Routes from './src/routes';
import {NativeBaseProvider} from 'native-base';
import {ToastProvider} from 'react-native-toast-notifications';
import {Icon} from 'react-native-elements';
import colors from '@SilalApp/common/assets/colors';
import Preference from 'react-native-preference';
import {useTranslation} from 'react-i18next';

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
      {/* <NativeBaseProvider>
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
          }}> */}
          <MenuProvider >
            <Routes />
          </MenuProvider>
        {/* </ToastProvider>
      </NativeBaseProvider> */}
    </>
  );
};

export default App;
