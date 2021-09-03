import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Details({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> { navigation.getParam('title') } </Text>
            <Text style={styles.subTitle}> { navigation.getParam('body') } </Text>
            <Text style={styles.title}> { navigation.getParam('rating') } </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: 'coral'
    },
    title:{
        fontSize:32,
        fontFamily: 'Ubuntu-Bold',
        fontSize: 24,

    },
    subTitle:{
        fontSize:20,
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,

    }
})

export default Details