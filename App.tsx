import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './store/counterSlice'
import Counter from './screens/Counter'


const store = configureStore({
  reducer:{
    CounterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

const App = () => {

  return (
    <Provider store={store}>
      <Counter/>
    </Provider>

  )
}

export default App