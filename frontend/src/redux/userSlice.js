import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const baseUrl = 'http://localhost:5000/users'


export const registerUser = createAsyncThunk ('user/register', async (data, thunkAPI) => {
    const response = await axios.post(`${baseUrl}/register`)
    return response.data
})

export const loginUser = createAsyncThunk ('user/login', async (data, thunkAPI) => {
    const response = await axios.post(`${baseUrl}/login`)
    return response.data
})

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:[],
        isFetching:false,
        isSuccess:false,
        isError:false,
        isLoggedIn:false,
        isRegistered:false,
        errorMessage:''
    },reducers:{
        clearState: (state) => {
            state.isFetching = false
            state.isError = false
            state.isError = false
            return state
        },
        clearErrorMsg: (state) => {
            state.errorMessage = ''
        }
    }, extraReducers:{
        [registerUser.pending]: (state) => {
            state.isFetching = true
        },
        [registerUser.fulfilled]:(state, {payload}) =>{
            state.isFetching = false
            state.isSuccess = true
            if(payload.message){
                state.isError = true
                state.errorMessage = payload.message
            }else{
                state.isRegistered = true 
            }
        },
        [postUser.rejected]:(state, {payload}) => {
            state.isFetching = false
            state.isSuccess = false
            state.isError = true
            state.errorMessage = payload.message
        },

        //login extra reducers
        [loginUser.pending]:(state) => {
            state.isFetching = true
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            console.log(payload)
            state.isFetching = false
            state.isSuccess = true
            if(payload.error){
                state.isError = true
                state.errorMessage = payload.error
            }else{
                state.userDetails = payload
                state.isLoggedin = true
                state.errorMessage = false
            }
            return state
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.isFetching = false
            state.isSuccess = false
            state.isError = true
            state.errorMessage = payload.message
        }
    }
})

export const {clearState, clearErrorMsg} = userSlice.actions