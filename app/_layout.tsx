import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'

import { useFonts } from 'expo-font'
import './global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "WorkSans-Black": require('../assets/fonts/WorkSans-Black.ttf'),
        "WorkSans-Light": require('../assets/fonts/WorkSans-Light.ttf'),
        "WorkSans-Medium": require('../assets/fonts/WorkSans-Medium.ttf')
    })
    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync()
    }, [fontsLoaded, error])
    if (!fontsLoaded && !error) return null;
    // return <Slot/>
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
        </GestureHandlerRootView>
    )

}

export default RootLayout