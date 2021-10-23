import { onAuthStateChanged } from '@firebase/auth'
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth } from '../utils/firebase'
import { NavigationHome, NavigationLogin } from './Navigation'

const RootNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
          setCurrentUser(user ? user : null)
        })
        return () => {
          unsubscribe()
        }
      }, [])
    return (
        <>
       {currentUser ? <NavigationHome/> : <NavigationLogin/>}
       </>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
