import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store';

const ProductScreen = () => {
    const { id } = useLocalSearchParams();
    const product = products.find(product => product.id == id);
    const navigation = useNavigation()
    if (!product) {
        return <Redirect href='/' />
    }
    useEffect(() => {
        navigation.setOptions({
            title: product.title ?? 'Producto'
        })
    }, [product])


    return (
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-2xl '> {product.title} </Text>
            <Text className=''> {product.description} </Text>
            <Text className='font-work-black'> {product.price} </Text>
        </View>
    )
}

export default ProductScreen