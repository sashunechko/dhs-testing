import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SubmitForm, FormData} from '../model/common'

const baseUrl = "https://gigachat.devices.sberbank.ru/api"

export const gigaChatApi = createApi({
  reducerPath: 'gigaChatApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAuthToken: builder.mutation<, Pick<SubmitForm, 'email' | 'password'>>({
      query: (body) => ({
        url: '/v2/oauth',
        method: 'POST',
        body,
      })
    }),
    getAnswer: builder.mutation<FormData, Pick<FormData, 'date' | 'name' | 'phone' | 'specialist' | 'time'>>({
      query: (body) => ({
        url: '/v1/chat/completions',
        method: 'POST',
        body,
      })
    })
  }),
})
