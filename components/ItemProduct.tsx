import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

interface Props {
    id: string;
    title: string;
    description: string;
    price: number;
}


const ItemProduct = ({ id, title, description, price }: Props) => {
    return (
        <View className='mb-10 px-3'>
            <Text className='text-2xl font-work-black'>{title}</Text>
            <Text className=''>{description}</Text>
            <View className='flex flex-row justify-between mt-2'>
                <Text className='font-work-black'>{price}</Text>
                <Link href={`/tabs/(stack)/products/${id}`}>
                    Ver Detalles
                </Link>
            </View>
        </View>
    )
}

export default ItemProduct