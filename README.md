### Getting started with react-redux
1. Install dependancies with the following command
```shell
    npm install -D react-redux @redux/toolkit
```
2. Create a redux dir with two files, store.js and a slicer file
3. In store.js put in the following
```js
    import {configureStore} from '@reduxjs/toolkit' 
    import { userSlice } from './userSlice'

    export const store = configureStore({
        reducer:{
            user:userSlice.reducer
        }
    })
```
4. In the reducer file start with below nd add the slicer
```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//code snipet for a reducer
export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:{},
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
        isLoggedin:false,
        isRegistered:false
    }, reducers: {

    }, extraReducers:{

    }
})
Check a smaple reducers here [Sample reducer] (github.com/ealpha072/mern_user_administration/blob/main/client/src/redux/userSlice.js)

