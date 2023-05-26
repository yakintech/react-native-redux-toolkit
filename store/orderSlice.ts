import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const getAllOrders = createAsyncThunk(
    'orders/getAll',
    async () => {
        let res = await axios.get('https://northwind.vercel.app/api/orders');
        return res.data
    }
)


interface OrdersState {
    data: [],
    loading: boolean
}

const initialState: OrdersState = {
    data: [],
    loading: true
}


const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: initialState,
    reducers: {
        empty: (state) => {
            state.data = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllOrders.pending, (state, action) => {
            state.data = [];
            state.loading = true
        })

        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false
        })

        builder.addCase(getAllOrders.rejected, (state, action) => {
            state.data = [];
            state.loading = false
        })
    }
})


export default orderSlice.reducer

export const { empty } = orderSlice.actions