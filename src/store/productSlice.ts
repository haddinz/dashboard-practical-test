import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { ProductSlice } from "../types/product";
import { RootState } from "./store";

interface saveProduct {
  barang: string;
  price: number;
}

interface updateProduct {
  barang: string;
  price: number;
  id: string;
}

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const response = await axios.get("http://localhost:4000/products");
  const data = response.data;
  return data;
});

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ barang, price }: saveProduct) => {
    const response = await axios.post("http://localhost:4000/products", {
      barang,
      price,
    });

    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct/",
  async ({ barang, price, id }: updateProduct) => {
    const response = await axios.patch(`http://localhost:4000/products/${id}`, {
      barang,
      price,
    });

    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string) => {
    await axios.delete(`http://localhost:4000/products/${id}`);
    return id;
  }
);

const productEntry = createEntityAdapter({
  selectId: (product: ProductSlice) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntry.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        productEntry.setAll(state, action.payload);
      })
      .addCase(saveProduct.fulfilled, (state, action) => {
        productEntry.addOne(state, action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        productEntry.removeOne(state, action.payload);
      })
      .addCase(
        updateProduct.fulfilled,
        (state, action: PayloadAction<ProductSlice>) => {
          productEntry.updateOne(state, {
            id: action.payload.id,
            changes: action.payload,
          });
        }
      );
  },
});

export const productSelectors = productEntry.getSelectors(
  (state: RootState) => state.product
);

export default productSlice.reducer;
