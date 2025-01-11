import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '@/components/shared/CustomButton'
import { Link, router, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    const onToggleDrawer = () => {
        //*Abrir el toggle
        navigation.dispatch(DrawerActions.toggleDrawer)
    }
    return (
        <SafeAreaView>
            <View className='px-10'>


                <CustomButton
                    className='mb-10'
                    color='primary'
                    onPress={() => router.push('/products')}
                >
                    Productos
                </CustomButton>

                <CustomButton
                    className='mb-10'
                    color='secondary'
                    onPress={() => router.push('/profile')}
                >
                    Profile
                </CustomButton>
                <CustomButton
                    className='mb-10'
                    color='tertiary'
                    onPress={() => router.push('/settings')}
                >
                    Ajustes
                </CustomButton>

                <CustomButton
                    onPress={onToggleDrawer}
                >
                    Abrir Menu
                </CustomButton>

                <Link href='/products' asChild>
                    <CustomButton
                        className='mb-10'
                        onPress={() => router.push('/')}
                    >
                        Productos!!
                    </CustomButton>
                </Link>


                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen