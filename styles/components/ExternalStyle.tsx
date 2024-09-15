import { View, Text } from 'react-native'
import React from 'react'
import { externalStyling } from '@/utils/ExternalStyling'

const ExternalStyle = () => {
  return (
    <View>
      <Text style={externalStyling.textStyle}>ExternalStyle</Text>
    </View>
  )
}

export default ExternalStyle