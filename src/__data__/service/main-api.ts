import { getConfigValue } from '@brojs/cli'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TestData, User, RecordsData, ResultsData, SubmitData, SubmitForm, FormData} from '../model/common'
import { URLs } from '../urls'

const baseUrl = URLs.api.main

export const mainApi = createApi({
  reducerPath: 'main-api',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getTestData: builder.query<TestData, void>({
      query: () => '/tests-data',
    }),
    getUsersData: builder.query<User[], void>({
      query: () => '/users-data',
    }),
    getResultsData: builder.query<ResultsData, void>({
      query: () => '/results-data',
    }),
    getRecordsData: builder.query<RecordsData, void>({
      query: () => '/records-data',
    }),
    submitEnter: builder.mutation<SubmitForm, Pick<SubmitForm, 'email' | 'password'>>({
      query: (body) => ({
        url: '/submit-enter',
        method: 'POST',
        body,
      })
    }),
    submitReg: builder.mutation<SubmitForm, Pick<SubmitForm, 'email' | 'password'>>({
      query: (body) => ({
        url: '/submit-reg',
        method: 'POST',
        body,
      })
    }),
    submitRecord: builder.mutation<FormData, Pick<FormData, 'date' | 'name' | 'phone' | 'specialist' | 'time'>>({
      query: (body) => ({
        url: '/submit-record',
        method: 'POST',
        body,
      })
    })
  }),
})
