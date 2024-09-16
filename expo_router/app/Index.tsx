import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href={'/About'}>Goto About</Link>
      <Link href={'/Contact'}>Goto Contact</Link>
      <Link href={'/user/10'}>User10</Link>
    </View>
  )
}

export default Index