import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const RootLayout = () => {
  return (
    <Tabs>

      <Tabs.Screen name='index' options={{
        title: 'Home',
        tabBarIcon: ({ color, focused, size }) => {
          // return <FontAwesome name='home' color={color} size={size} />
          // return <MaterialIcons name={focused ? 'home-filled' : 'home'} color={color} size={size} />
          return <Ionicons name={ focused ? 'home' : 'home-outline' } color={color} size={size} />
        },
        headerShown: true
      }} />
      
      <Tabs.Screen name='about' options={{
        title: 'About',  
        tabBarIcon: () => (
          <View style={{
            backgroundColor: 'red',
            width: 20,
            height: 20,
            borderRadius: 10,
          }}>
          </View>
        ),
        tabBarLabel: 'About Tab',
        tabBarLabelStyle: {
          color:'red',
          fontWeight: 'bold',
        },
      }} />

      <Tabs.Screen name='contact' options={{
        title: 'Contact',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='call-outline' color={'green'} size={size} />
          // <MaterialIcons name='contact-mail' color={color} size={size} />
        ),
      }} />

      <Tabs.Screen name='details' options={{
        // When we want route to exist but not get showed in the tab bar
        href: null
      }} />

    </Tabs>
  )
}

export default RootLayout