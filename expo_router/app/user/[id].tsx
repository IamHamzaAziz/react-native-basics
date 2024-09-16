import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const User = () => {
    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>User - { id }</Text>
            <Link href={'/Index'}>Go Back</Link>
        </View>
    )
}

export default User