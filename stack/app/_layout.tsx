import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
    // Index is first route in the folder always and it's '/'
    // Other screens are defined in the respective folders with their respective names as the screen names

    return (
        <Stack>
            <Stack.Screen name='index' options={{
                headerTitle: 'Index Page',
                headerStyle: { backgroundColor: 'tomato' },
                headerTintColor: 'white',
                headerShown: true      // If false then header will not be shown, it is by default true
            }} />
            <Stack.Screen name='home' options={{
                headerTitle: 'Home',
                headerStyle: {
                    backgroundColor: 'blue'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white'
                },
                headerTitleAlign: 'center',
            }} />
            <Stack.Screen name='contact' />
        </Stack>
    )
}

export default RootLayout