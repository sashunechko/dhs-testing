import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SubmitForm, SubmitFormResponse } from '../model/common'

const baseUrl = "https://antd-table-v2-backend.onrender.com/api/auth/"

const commonHeaders = new Headers();
    commonHeaders.append("projectkey", "dhs-testing_b9HlYWwyDYwZnJ95S3feAYHcm4X");
    commonHeaders.append("Content-Type", "application/json");
    commonHeaders.append("Accept", "application/json");

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<SubmitFormResponse, Pick<SubmitForm, 'email' | 'password'>>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        headers: commonHeaders,
        body,
      })
    }),
    register: builder.mutation<SubmitFormResponse, Pick<SubmitForm, 'email' | 'password'>>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        headers: commonHeaders,
        body,
      })
    })
  }),
})
