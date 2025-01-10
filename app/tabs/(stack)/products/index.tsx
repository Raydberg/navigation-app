import { View, FlatList } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import ItemProduct from '@/components/ItemProduct'

const ProductsScreen = () => {
    return (
        <View className='flex flex-1 px-6'>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ItemProduct
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ProductsScreen