import { View, Text, Button, Pressable, Image } from 'react-native'
import React from 'react'

const Index = () => {
    return (
        <View>
            <Text>Index</Text>
            {/* <Button title='Console log Click' onPress={() => console.log('Hi')} /> */}
            {/* <Button title='Alert Click' onPress={() => alert('Hi')} /> */}
            {/* <Button title='Console Warn Click' onPress={() => console.warn('Warn')} /> */}

            {/* onPressIn is triggered when the press gesture starts */}
            {/* <Pressable onPressIn={() => console.log('Press Start')}>
                <Text>Pressable onPressIn Text</Text>
            </Pressable> */}

            {/* onPressOut is triggered when the press gesture finishes */}
            {/* <Pressable onPressOut={() => console.log('Press Out')}>
                <Text>Pressable onPressOut Text</Text>
            </Pressable> */}

            {/* onLongPress is detected when long press is detected */}
            <Pressable onLongPress={() => console.log('Long Press')}>
                <Text>Pressable onLongPress Text</Text>
            </Pressable>


            <Image
                source={require('../assets/img.jpg')}
                style={{ width: 200, height: 200, borderRadius: 20, marginVertical: 10 }}
            />

            <Image
                source={{uri: 'https://images.pexels.com/photos/28348904/pexels-photo-28348904/free-photo-of-a-wave-breaking-at-sunset-with-the-sun-behind-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                style={{ width: 200, height: 200, borderRadius: 100, marginVertical: 10 }}
            />
        </View>
    )
}

export default Index