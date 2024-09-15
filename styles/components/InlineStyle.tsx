import { View, Text } from 'react-native'
import React from 'react'

const InlineStyle = () => {
  return (
    <View>
      <View style={{ backgroundColor: "red", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "yellow", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "blue", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "green", width: 100, height: 100 }} />

      <Text style={{ color: "crimson", backgroundColor: "yellow", padding: 10 }}>Hello World</Text>
    </View>
  )
}

export default InlineStyle