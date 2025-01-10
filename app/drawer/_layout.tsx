import { View, Text } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import CustomDrawer from '@/components/shared/CustomDrawer'

const DrawerLayout = () => {
    return (
        <Drawer
            //*Cuando ponemos este componente
            drawerContent={CustomDrawer}
            //*Ignorara lo que sigue , reemplazar -> no se renderiza
            screenOptions={{
                //*Opacidad al momento de abrir
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                }
            }}>
            <Drawer.Screen
                name="user/index"
                options={{
                    drawerLabel: 'Home',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='person-circle-outline' size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="schedule/index"
                options={{
                    drawerLabel: 'User',
                    title: 'Shedure',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='calendar-number-outline' size={size} color={color} />
                    )
                }}
            />
        </Drawer>
    )
}

export default DrawerLayout