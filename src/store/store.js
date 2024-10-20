import {authReducers} from "./authSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authReducers
    }
})

export default store;