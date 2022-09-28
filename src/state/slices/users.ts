import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ResponseUsers } from '../../api/Users'

// Define a type for the slice state
interface UsersState {
  usersSlice: ResponseUsers
}

// Define the initial state using that type
const initialState: UsersState = {
  usersSlice: {},
} as UsersState

export const usersSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<ResponseUsers>) => {
      state.usersSlice = action.payload
    },

    // decrement: (state) => {
    //   state.value -= 1
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload
    },
  },
})

export const { setUsers, incrementByAmount } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type

export const selectCount = (state: RootState) => state?.users

export default usersSlice.reducer
