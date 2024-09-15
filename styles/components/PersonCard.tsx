import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import React from 'react'

const PersonCard = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.image} />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.description}>A popular programming Guy</Text>
            {/* <Button title="View Details" /> */}
            <Pressable onPress={()=>alert('No details right now')}>
                <Text style={styles.pressableText}>View Details</Text>
            </Pressable>
        </View>
    )
}

export default PersonCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 150,
        marginHorizontal: 50,
        borderWidth: 2,
        borderColor: 'black',
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 50, height: 50 },
        borderRadius: 20
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    name: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 15,
        textAlign: 'center',
    },
    pressableText: {
        color: 'white',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        fontSize: 15,
        width: 150,
        textAlign: 'center',
    }
})