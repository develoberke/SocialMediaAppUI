import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../Libs/api";

const initialState = {
    isAuthenticated: false,
    token: "",
    user: {},
    err:"",
    loading: false,
}

export const login = createAsyncThunk("auth/login", async (loginCred, thunkApi) => {
    try{
        const response = await axios.post("/auth/login", loginCred)
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data;
    }
    catch(error){
        console.log(error)
        thunkApi.rejectWithValue(error.response?.data);
    }
})


export const securitySlice = createSlice({
    name:"security",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
            state.isAuthenticated = true;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.user = {};
            state.token = "";
            state.loading = false;
            state.err = "Invalid Credentials"
        })
    }
})


export default securitySlice.reducer;