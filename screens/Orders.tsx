import { View, Text, FlatList, Button, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrderById, empty, getAllOrders } from '../store/orderSlice';
import { AppDispatch, RootState } from '../App';

const Orders = () => {

    let dispatch = useDispatch<AppDispatch>();

    let { OrderReducer } = useSelector<RootState, any>(state => state);


    useEffect(() => {

        dispatch(getAllOrders())

    }, [])

    const emptyOrders = () => {
        dispatch(empty())
    }

    const removeOrder = (item:any) => {
        dispatch(deleteOrderById(item));
        
    }

    const renderItem = ({ item }: any) => {
        return <Pressable onPress={() => removeOrder(item)}>
            <Text style={{ fontSize: 30 }}>{item.shipName}</Text>
        </Pressable>
    }

    

    return (<SafeAreaView>
        <Text style={{fontSize:50}}>{OrderReducer.error.toString()}</Text>
        <Button title='EMPTY' onPress={() => emptyOrders()}></Button>
        {
            OrderReducer.loading ? <Text style={{ fontSize: 30 }}>Loading...</Text> : <FlatList
                data={OrderReducer.data}
                renderItem={renderItem}
            />
        }

    </SafeAreaView>
    )
}

export default Orders