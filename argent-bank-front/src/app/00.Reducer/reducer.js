import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})
export default userSlice.reducer

export const { setUser } = userSlice.actions
