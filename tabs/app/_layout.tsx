import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{
        title: 'Home',
      }} />
      
      <Tabs.Screen name='about' options={{
        title: 'About',
        tabBarIcon: ({ color, size }) => (
          <View style={{
            backgroundColor: 'red',
            width: 20,
            height: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          </View>
        ),
        tabBarLabel: 'About Tab',
        tabBarLabelStyle: {
          color:'red',
          fontWeight: 'bold',
        },
      }} />

      <Tabs.Screen name='contact' />
    </Tabs>
  )
}

export default RootLayout