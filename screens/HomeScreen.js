import { signOut } from '@firebase/auth'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { auth } from '../utils/firebase'

const HomeScreen = () => {
    return (
        <View>
            <Text>Home</Text>
            <Button
            title="logout"
            onPress={()=>signOut(auth)}
            />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
