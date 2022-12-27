import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../Libs/api"

const initialState = {
    posts:[],
    loading:false,
}

export const getAllPosts = createAsyncThunk("/posts/getAllPosts", async (_, thunkApi) => {
    try{
        const response = await axios.get("/posts");
        return response.data
    }

    catch(error){
        thunkApi.rejectWithValue(error);
    }
})


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
    }
})

export default postSlice.reducer;