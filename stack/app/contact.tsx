import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
    return (
        <View>
            <Text>Contact</Text>
            <Link href={'/'}>Go to Index</Link>
        </View>
    )
}

export default Contact