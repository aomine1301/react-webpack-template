import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pagination, ResponseUsers } from '../../api/Users'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1/users' }),
  endpoints: (builder) => ({
    getUsers: builder.query<ResponseUsers, Pagination>({
      query: (pagination: Pagination) => `?page=${pagination.page}&count=${pagination.count}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = usersApi
