import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: 'coral'
    },
    title:{
        fontSize: 24
    }
})

export default About