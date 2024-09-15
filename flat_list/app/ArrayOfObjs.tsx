import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface CityInterface {
    id: number,
    name: string,
    population: number,
}

const ArrayOfObjs = () => {
    // make an array of objects of cities with unique ids
    const cities = [
        { id: 1, name: 'London', population: 8900000 },
        { id: 2, name: 'New York', population: 8550000 },
        { id: 3, name: 'Tokyo', population: 37760000 },
    ]

    function renderCities({ item } : { item: CityInterface }) {
        return (
            <View>
                <Text>City is {item.name} with {item.population} people</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={cities}
                
                keyExtractor={item => item.id.toString()}   // In case id or key is not a string
                // keyExtractor={(item, index) => index.toString()}   // Both are correct

                // renderItem={({ item }) => (
                //     <Text>City: {item.name} - {item.population} people</Text>
                // )}
                renderItem={({ item }) => renderCities({ item })}
            />
        </View>
    )
}

export default ArrayOfObjs