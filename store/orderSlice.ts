import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const getAllOrders = createAsyncThunk(
    'orders/getAll',
    async (data, { rejectWithValue }) => {
        try {
            let res = await axios.get('https://northwind.vercel.app/api/orders');
            return res.data
        } catch (error) {
            return rejectWithValue("Uygulamada hata meydana geldi!!");
        }
    }
)

export const deleteOrderById = createAsyncThunk(
    'orders/deleteOrderById',
    async (item: any, { rejectWithValue }) => {        
        try {
            await axios.delete(`https://northwind.vercel.app/api/orders/${item?.id}`)
            return item
        } catch (error) {
            
            return rejectWithValue("Uygulamada hata meydana geldi!!");
        }

    }
)


interface OrdersState {
    data: [],
    loading: boolean,
    error:string
}

const initialState: OrdersState = {
    data: [],
    loading: true,
    error:''
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

        //get All Orders cases
        builder.addCase(getAllOrders.pending, (state, action) => {
            state.data = [];
            state.loading = true
        })

        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false
        })

        builder.addCase(getAllOrders.rejected, (state, action : any) => {
            state.data = [];
            state.loading = false
            state.error = action.payload     
        })

        builder.addCase(deleteOrderById.pending, (state, action) => {
            state.loading = true
        })


        //deleteOrderById cases
        builder.addCase(deleteOrderById.fulfilled, (state: any, { payload }) => {
            state.loading = false;
            state.data = state.data.filter((q: any) => q.id != payload.id)
        })

        builder.addCase(deleteOrderById.rejected, (state, action: any) => {
            state.loading = false
            // state.error = action.payload.toString()

        })
    }
})


export default orderSlice.reducer

export const { empty } = orderSlice.actions