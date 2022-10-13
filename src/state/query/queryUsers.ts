import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pagination, ResponseCreateUser, ResponseUsers } from '../../api/Users'

const token = localStorage.getItem('token')
export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1/users' }),
  endpoints: (builder) => ({
    getUsers: builder.query<ResponseUsers, Pagination>({
      query: (pagination = { page: 1, count: 6 }) => `?page=${pagination.page}&count=${pagination.count}`,
      providesTags: (result: ResponseUsers) =>
        result ? [...result.users.map(({ id }) => ({ type: 'Users' as const, id })), { type: 'Users', id: 'LIST' }] : [{ type: 'Users', id: 'LIST' }],
    }),
    createUser: builder.mutation<ResponseCreateUser, FormData>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
        headers: { Token: token },
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
})

export const { useGetUsersQuery, useCreateUserMutation } = usersApi
