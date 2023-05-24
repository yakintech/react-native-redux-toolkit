import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//initial state dizaynını hazırladım
interface CounterState {
    value: number
}


//default değeri inital state e atadım
const initialState: CounterState = {
    value: 0
}


//reducer ve actionlarımın olduğu bir slice hazırladım
export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    }
})


//slice içerisinden acitonları EXPORT ettim
export const { increment, decrement, incrementByAmount } = counterSlice.actions

//slice içerisinden reducerları EXPORT ettim
export default counterSlice.reducer

