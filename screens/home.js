import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from 'react-native'

function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'The fresh prince of belair', rating: 5, body: 'bla bla bla', key: '1' },
        { title: 'Stranger Things', rating: 4.5, body: 'bla bla bla', key: '2' },
        { title: 'Ozark', rating: 3.5, body: 'bla bla bla', key: '3' }
    ])
    return (
        <View style={styles.container}>
            <FlatList
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.push('Details', item)}>
                    <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
            )}
            />

        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        padding: 20
    },
    text: {
        padding: 20,
        fontSize:24,
        fontFamily: 'Ubuntu-Bold',
        flex: 1,
        backgroundColor: '#ddd'
    }
})

export default Home
