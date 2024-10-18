import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     cart:JSON.parse(localStorage.getItem('cart')) ?? []
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       addToCart:(oldState,reqData)=>{
          oldState.cart.push(reqData.payload)
          localStorage.setItem('cart',JSON.stringify(oldState.cart))
       },
       removeCart:(oldState,reqData)=>{
          let pid = reqData.payload.pid
          oldState.cart = oldState.cart.filter((items)=>items.pId!=pid)
          localStorage.setItem('cart',JSON.stringify(oldState.cart))
          
       },
       changeQty:(oldState,reqData)=>{
          let increaseQty = oldState.cart.map((items)=>{
             if(items.pId==reqData.payload.pid){
               items.qty = reqData.payload.qty
             }
             return items
          })
          localStorage.setItem('cart',JSON.stringify(oldState.cart))
       }
      
    }
})
export const {addToCart,removeCart,changeQty} = cartSlice.actions
export default cartSlice.reducer