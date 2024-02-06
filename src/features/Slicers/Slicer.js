import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProzHubApi = createAsyncThunk('prozhub/fetchProzHubApi', async () => {
    const response = await axios.get('https://quiz-app-api-jade.vercel.app/questions')
    return response.data
}
)

const initialState = {
  testValue: 1,
  isLoading : false,
  isError : false,
  reviews: [],
};

const Slicer = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers : (builder)=>{
    builder.addCase(fetchProzHubApi.pending, (state, action) => {
        state.isLoading = true
        console.log('app load horhi')
        
    })
    builder.addCase(fetchProzHubApi.fulfilled, (state, action) => {
        state.isLoading = false
        state.reviews = action.payload
        console.log('app load hogai')

    })
    builder.addCase(fetchProzHubApi.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.reviews = []
        console.log('app error arha hai ')

    })

  }
});

export const {} = Slicer.actions;
export default Slicer.reducer;
