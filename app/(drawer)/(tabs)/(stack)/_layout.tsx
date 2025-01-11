import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'
import { Pressable, Text } from 'react-native'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const screenItems = [
    { name: 'home/index', title: 'Home' },
    { name: 'products/index', title: 'Productos' },
    { name: 'profile/index', title: 'Perfil' },
    { name: 'settings/index', title: 'Ajustes' },
]
const StackLayout = () => {

    const navigation = useNavigation()

    const onHeaderLeftClick = (canGoBack: boolean) => {
        if (canGoBack) {
            router.back()
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer())
    }

    return (
        <Stack
            screenOptions={{
                animation: 'flip',
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack }) =>
                (
                    <Pressable onPressIn={() => onHeaderLeftClick(!!canGoBack)} >
                        <Ionicons
                            name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                            size={20} />
                    </Pressable>
                )
                // headerShown: false
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