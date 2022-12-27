import { configureStore } from "@reduxjs/toolkit";
import securitySlice from "./securitySlice";
import postSlice from "./postSlice";
const store = configureStore({
    reducer: {
        security: securitySlice,
        post:postSlice,
    }
})


export default store;