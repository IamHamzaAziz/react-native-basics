import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'blue',
        // tabBarStyle: { backgroundColor: 'yellow' },
        
        // tabBarLabelStyle: {
        //   fontSize: 12,
        //   borderTopWidth: 2,
        //   borderTopColor: 'green',
        //   paddingTop: 10,
        //   paddingBottom: 10,
        // },

        // tabBarStyle: {
        //   backgroundColor: 'yellow',
        //   paddingTop: 10,
        //   paddingBottom: 10,
        //   borderTopWidth: 1,
        //   borderTopColor: 'red',

        //   height: 80,
        //   paddingVertical: 10,
        // }

        // tabBarShowLabel: false
      }}
    >

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

        // tabBarIcon: () => (
        //   <View style={{
        //     backgroundColor: 'red',
        //     width: 20,
        //     height: 20,
        //     borderRadius: 10,
        //   }}>
        //   </View>
        // ),

        tabBarIcon: ({color, size}) => (
          <Ionicons name='information-circle-outline' color={color} size={size} />
        ),


        tabBarLabel: 'About Tab',
        // tabBarLabelStyle: {
        //   color:'red',
        //   fontWeight: 'bold',
        // },
      }} />

      <Tabs.Screen name='contact' options={{
        title: 'Contact',
        tabBarIcon: ({ color, size }) => (
          // <Ionicons name='call-outline' color={'green'} size={size} />
          <Ionicons name='call-outline' color={color} size={size} />

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