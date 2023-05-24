import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../App';
import { increment, incrementByAmount } from '../store/counterSlice';

const Counter = () => {

    const [number, setnumber] = useState('0')
    let { CounterReducer } = useSelector<RootState,any>(state => state);
    
    let dispatch = useDispatch();

    const increaseData = () => {
        dispatch(increment())
    }


    const increaseByValue = () => {
        dispatch(incrementByAmount(Number(number)))
    }
    return ( 
        <View>
            <Text style={{fontSize:40}}>{CounterReducer.value}</Text>
            <Button title='Increase' onPress={increaseData}></Button>
            <View>
                <TextInput onChangeText={setnumber} style={styles.input}></TextInput>
                <Button onPress={increaseByValue} title='Increase By Value'></Button>
            </View>
        </View>
    )
}

export default Counter


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  