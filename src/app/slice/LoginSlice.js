import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
const initialState={
      token:getCookie('token') ?? ''
}
export const UserSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        loginSlice:(oldstate,weblogin)=>{
          let {payload} = weblogin
          console.log(weblogin)
          oldstate.token=payload.token
          setCookie('token',payload.token)
        },
        logOutSlice:(oldstate)=>{
            oldstate.token=''
             deleteCookie('token',)
        }
    }
})
export const{loginSlice,logOutSlice} =UserSlice.actions
export default UserSlice.reducer