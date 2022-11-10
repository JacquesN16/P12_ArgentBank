import { configureStore } from '@reduxjs/toolkit'
import user from '../app/00.Reducer/reducer'


const rootReducer = configureStore({
    reducer: {
        user,
    },
})

export default rootReducer
