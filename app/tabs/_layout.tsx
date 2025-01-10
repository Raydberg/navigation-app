import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'green'}}>
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
                }}
            />
        </Tabs>
    );
}