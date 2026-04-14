import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        Swal.fire({
          title: "Product Updated Success",
          icon: "success",
          draggable: true,
        });
      } else {
        state.cart.push({
          ...newItem,
          quantity: 1,
        });
        Swal.fire({
          title: "Product Added Success",
          icon: "success",
          draggable: true,
        });
      }
    },
    increaseQuantity : (state,action)=>{
        const id = action.payload
        const prod = state.cart.find(el => el.id === id)
        prod.quantity += 1;

    },
        decreaseQuantity : (state,action)=>{
        const prod = state.cart.find(el => el.id === action.payload)
        if(prod && prod.quantity === 1){
            state.cart = state.cart.filter((el) => el.id !== action.payload);
        }else{
            prod.quantity -= 1;
        }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      Swal.fire({
        title: "Product Removed Success",
        icon: "success",
        draggable: true,
      });
    },
  },
});
export const { addItem, removeItem,decreaseQuantity,increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
