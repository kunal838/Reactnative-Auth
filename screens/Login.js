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
  
const Login = ({navigation}) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  return (
    <View>
      <Text>Login</Text>
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
          await  signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            alert(error.message)
        } 
      }}
      />
      <TouchableOpacity 
      onPress={()=>{navigation.navigate('Signup')}}>
      <Text>SignIn</Text>

      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
