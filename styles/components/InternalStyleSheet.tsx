import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InternalStyleSheet = () => {
  return (
    <View>
      <Text style={styles.textStyle}>InternalStyleSheet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'blue',
        fontSize: 20,
        backgroundColor: 'red',
        fontWeight: 'bold',
        padding: 10,
        fontStyle: "italic"
    }
})

export default InternalStyleSheet
