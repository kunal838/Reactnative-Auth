import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import {auth} from '../utils/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    
    signOut,
    confirmPasswordReset,
  } from 'firebase/auth'
  
const Signup = ({navigation}) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  return (
    <View>
      <Text>Signin</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
      />
         <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
      />
      <Button
      title="login"
      onPress={async()=>{
        try {
           await createUserWithEmailAndPassword(auth, email, password)
            
        } catch (error) {
            alert(error.message)
            
        } 
      }}
      />
      
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
