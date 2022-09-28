import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/users'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from './query/queryUsers'
import { tokenApi } from './query/queryToken'
import { positionsApi } from './query/queryPositions'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    [tokenApi.reducerPath]: tokenApi.reducer,
    [positionsApi.reducerPath]: positionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, tokenApi.middleware, positionsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
