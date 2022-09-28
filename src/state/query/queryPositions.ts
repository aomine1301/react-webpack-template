import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PositionInterface } from '../../api/getPositions'

// Define a service using a base URL and expected endpoints
export const positionsApi = createApi({
  reducerPath: 'positionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1/positions' }),
  endpoints: (builder) => ({
    getPositions: builder.query<{ success: boolean; positions: PositionInterface[] }, void>({
      query: () => '',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPositionsQuery } = positionsApi
