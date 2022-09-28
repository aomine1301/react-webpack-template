import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TokenResponseI } from '../../api/checkToken'

// Define a service using a base URL and expected endpoints
export const tokenApi = createApi({
  reducerPath: 'tokenApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1/token' }),
  endpoints: (builder) => ({
    getToken: builder.query<TokenResponseI, void>({
      query: () => '',
      transformResponse: (response: TokenResponseI) => {
        localStorage.setItem('token', response.token)
        return response
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTokenQuery } = tokenApi
