import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href={'/contact'}>Go to Contact</Link>
      <Link href={'/home'}>Go to Home</Link>
    </View>
  )
}

export default Index