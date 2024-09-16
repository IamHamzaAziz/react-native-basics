import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={'/contact'}>Go to Contact</Link>
      <Link href={'/'}>Go to Index</Link>
    </View>
  )
}

export default Home