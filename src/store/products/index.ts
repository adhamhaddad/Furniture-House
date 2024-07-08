// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

interface DataParams {
  q: string
  // status: string
  // currentPlan: string
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Products
export const fetchData = createAsyncThunk('appProducts/fetchData', async () => {
  const response = await axios.get('/api/products')

  return response.data
})

// ** Add Product
export const addProduct = createAsyncThunk(
  'appProducts/addProduct',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/api/products/add', {
      data
    })
    dispatch(fetchData())

    return response.data
  }
)

// ** Delete Product
export const deleteProduct = createAsyncThunk(
  'appProducts/deleteProduct',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/api/products/delete', {
      data: id
    })
    dispatch(fetchData())

    return response.data
  }
)

export const appProductsSlice = createSlice({
  name: 'appProducts',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appProductsSlice.reducer
