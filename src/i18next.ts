import axios from 'axios'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const loadPath = () => `${__webpack_public_path__}locales/{{lng}}.json`

export const i18nextAxios = axios.create()

const request = async (opt, url, payload, callback) => {
  let overrides = {}

  const [_, lng] = /([a-z\-]{2,5}).json$/.exec(url)

  try {
    const resp = await fetch(
      `https://static.bro-js.ru/i18next-overrides/main/${lng}.json`,
    )

    overrides = await resp.json()
  } catch (error) {
    console.log(error)
  }
  const localesResponse = await i18nextAxios(url)

  const override = {
    ...localesResponse.data,
    ...overrides,
  }

  localesResponse.data = override
  callback(null, localesResponse)
}

const initConfig = {
  lng: localStorage.getItem('i18nextlng') || 'ru',
  fallbackLng: 'ru',
  load: 'currentOnly',
  supportedLngs: ['ru', 'en'],
  keySeparator: false,
  backend: {
    loadPath,
    request,
  },
}

export const i18nextInitConfig = (i18next) =>
  i18next.use(HttpApi).use(LanguageDetector).init(initConfig)

export const i18nextReactInitConfig = (i18next) =>
  i18next
    .use(HttpApi)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init(initConfig)
