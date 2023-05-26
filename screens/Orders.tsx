import { View, Text, FlatList, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { empty, getAllOrders } from '../store/orderSlice';
import { AppDispatch, RootState } from '../App';

const Orders = () => {

    let dispatch = useDispatch<AppDispatch>();

    let { OrderReducer } = useSelector<RootState, any>(state => state);

    console.log(empty());
    

    useEffect(() => {

        dispatch(getAllOrders())

    }, [])

    const emptyOrders = () => {
        dispatch(empty())
    }


    return (<>
    <Button title='EMPTY' onPress={() => emptyOrders()}></Button>
{
    OrderReducer.loading ? <Text style={{fontSize:30}}>Loading...</Text> : <FlatList
    data={OrderReducer.data}
    renderItem={({ item }: any) => <Text style={{fontSize:30}}>{item.shipName}</Text>}
/>
}
        
    </>
    )
}

export default Orders