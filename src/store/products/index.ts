// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Types Imports
import { IProduct } from 'src/types/product-types'

interface DataParams {
  id?: number | null
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Products
export const fetchData = createAsyncThunk('appProducts/fetchData', async (params: DataParams) => {
  const response = await axios.get('/api/products', { params })

  return response.data
})

// ** Add Product
export const addProduct = createAsyncThunk('appProducts/addProduct', async (data: { [key: string]: string }) => {
  const response = await axios.post('/api/products/add', {
    data
  })

  return response.data
})

// ** Delete Product
export const deleteProduct = createAsyncThunk('appProducts/deleteProduct', async (id: number) => {
  const response = await axios.delete('/api/products/delete', { data: id })

  return response.data
})

export const appProductsSlice = createSlice({
  name: 'appProducts',
  initialState: {
    loading: true,
    data: [] as IProduct[],
    total: 1,
    params: {},
    allData: [] as IProduct[]
  },
  reducers: {
    deleteProduct: (state, action) => {
      const data = action.payload
      const updatedProducts = state.data.filter(item => item.product_id !== data.product_id)
      state.data = updatedProducts
      state.allData = updatedProducts
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data
        state.total = action.payload.total
        state.params = action.payload.params
        state.allData = action.payload.allData
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state = appProductsSlice.caseReducers.deleteProduct(state, action)
      })
  }
})

export default appProductsSlice.reducer
