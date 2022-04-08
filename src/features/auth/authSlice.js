import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

const intialState = {
    user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message  : ''
}

export const authSlice = createSlice({
    name:'auth',
    intialState,
      reducers: {
       reset: (state) => {
         state.isLoading = false
         state.isError = false
         state.isSuccess = false
         state.message = ''
       }
    },
    extraReducers: (builder) => {}
})

export default authSlice.reducer