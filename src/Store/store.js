import { configureStore } from "@reduxjs/toolkit";
import securitySlice from "./securitySlice";

const store = configureStore({
    reducer: {
        security: securitySlice,
    }
})


export default store;