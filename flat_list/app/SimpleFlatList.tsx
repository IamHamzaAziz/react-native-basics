import { View, Text, FlatList } from 'react-native'
import React from 'react'

const SimpleFlatList = () => {
    // Take names of any fives cities in an array
    const cities = ['New York', 'London', 'Tokyo', 'Berlin', 'Paris']

    return (
        <View>
            <FlatList
                data={cities}
                // keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return (
                        <Text>{item}</Text>
                    )
                }}
            />
        </View>
    )
}

export default SimpleFlatList