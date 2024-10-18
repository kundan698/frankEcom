import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../slice/LoginSlice";
import  cartSlice  from "../slice/cartSlice";


export  const store = configureStore({
    reducer:{
        loginReducer:LoginSlice,
        cartReducer:cartSlice
       
    },
})

