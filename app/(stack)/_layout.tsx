import React from 'react'
import { Stack } from 'expo-router'

const screenItems = [
    { name: 'home/index', title: 'Home' },
    { name: 'products/index', title: 'Productos' },
    { name: 'profile/index', title: 'Perfil' },
    { name: 'settings/index', title: 'Ajustes' },
]


const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                animation: 'flip',
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {
                screenItems.map(({ name, title }, index) => (
                    <Stack.Screen
                        key={index}
                        name={name}
                        options={{
                            title: title,
                        }}
                    />
                ))
            }



            {/* <Stack.Screen name='home/index'
                options={{
                    title: 'Home'
                }} />
            <Stack.Screen name='products/index'
                options={{
                    title: 'Productos'
                }} />
            <Stack.Screen name='profile/index'
                options={{
                    title: 'Perfil'
                }} />
            <Stack.Screen name='settings/index'
                options={{
                    title: 'Ajustes'
                }} /> */}
        </Stack>
    )
}

export default StackLayout