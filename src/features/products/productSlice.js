import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    editProduct: (state, action) => {
      const { id, productName, productDetail } = action.payload;
      const existingProduct = state.find(product => product.id === id);
      if(existingProduct) {
        existingProduct.productName = productName;
        existingProduct.productDetail = productDetail;
      }
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.find(product => product.id === id);
      if(existingProduct) {
        return state.filter(product => product.id !== id);
      }
    }
  }
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;