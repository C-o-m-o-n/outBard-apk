import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import {app, auth} from '../firebase'

import {createUserWithEmailAndPassword} from 'firebase/auth'


const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      console.log("User created successfully")
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log (errorMessage)
      // ..
    });
  };

  const saveUserDataToFirestore = (userId, email) => {
    const firestore = app.firestore();
    const userRef = firestore.collection('users').doc(userId);

    // Save user data to Firestore
    userRef.set({
      email: email,
      // You can add more user information here
    })
    .then(() => {
      console.log('User data saved to Firestore!');
      // Redirect user to another screen or perform other actions
    })
    .catch((error) => {
      console.error('Error saving user data to Firestore: ', error);
      // Handle error (e.g., display error message to user)
    });
  };

  return (
    <View style={{display:"flex", flex:1 ,flexDirection:"column", justifyContent:"center", alignItems:"center", gap:15}}>
      <TextInput
          style={{
            backgroundColor: "#919190",
            padding: 15,
            height:"auto",
            width: "80%",
            borderRadius: 30,
            fontSize: 20,
            // color: theme === "dark" ? "white" : "#292230",
          }}
          placeholder="Email"
        onChangeText={setEmail}
        value={email}
        />

<TextInput
          style={{
            backgroundColor: "#919190",
            padding: 15,
            height:"auto",
            width: "80%",
            borderRadius: 30,
            fontSize: 20,
            // color: theme === "dark" ? "white" : "#292230",
          }}
          placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        />

<TouchableOpacity style={{
            backgroundColor: "#292230",
            padding: 15,
            height:"auto",
            width: "40%",
            borderRadius: 30,
            fontSize: 20,

            // color: theme === "dark" ? "white" : "#292230",
          }} onPress={handleSignUp}>
  <Text style={{color:"white",}}>Sign Up</Text>
</TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
