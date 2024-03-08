import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

import app from '../firebase'

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    app.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully, save user data to Firestore
        saveUserDataToFirestore(userCredential.user.uid, email);
      })
      .catch((error) => {
        console.error('Error signing up: ', error);
        // Handle error (e.g., display error message to user)
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
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
