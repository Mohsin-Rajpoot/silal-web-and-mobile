import i18next from 'i18next'
import english from './english.json'
import arabic from './arabic.json'
import {I18nManager} from 'react-native'
import {initReactI18next} from 'react-i18next'

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng:I18nManager.isRTL?'ar': 'en',
    resources:{
        en:english,
        ar:arabic
    },
    react:{
        useSuspense:false
    }
})

export default i18next