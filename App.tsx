import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './store/counterSlice'
import OrderReducer from './store/orderSlice'


import Counter from './screens/Counter'
import Orders from './screens/Orders'


const store = configureStore({
  reducer:{
    CounterReducer,
    OrderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const App = () => {


  return (
    <Provider store={store}>
      <Orders/>
    </Provider>

  )
}

export default App