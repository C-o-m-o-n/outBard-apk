import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  Alert,
  useColorScheme,
  TouchableOpacity,
} from "react-native";

import { router } from 'expo-router';

import { app, auth } from "../firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import outbardIcon from "../assets/outbard-icon-nobg.png";
import ThemeContext from "./context/ThemeContext";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";

const SignUpScreen = () => {
  const [bgColor, setbgColor] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const colorScheme = useColorScheme();


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        Alert.alert("User created successfully");
        const user = userCredential.user;
        
        router.replace("index")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
        // ..
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        Alert.alert("User logedin successfully");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
        // ..
      });
  };

  const saveUserDataToFirestore = (userId, email) => {
    const firestore = app.firestore();
    const userRef = firestore.collection("users").doc(userId);

    // Save user data to Firestore
    userRef
      .set({
        email: email,
        // You can add more user information here
      })
      .then(() => {
        console.log("User data saved to Firestore!");
        // Redirect user to another screen or perform other actions
      })
      .catch((error) => {
        console.error("Error saving user data to Firestore: ", error);
        // Handle error (e.g., display error message to user)
      });
  };

  return (
    <View
    style={{
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 15,
      backgroundColor: colorScheme === 'dark' ? "#292230" : "white"
    }}
    >
     <View
            style={{
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
              width: 150,
              height: 150,
              backgroundColor: colorScheme === 'dark' ? "transparent" : "#292230" ,
              borderRadius: 100,
            }}
          >
            <Image style={{ width: 150, height: 150, marginTop: 20, alignSelf: "center" }} source={outbardIcon} />
          </View>
      <TextInput
        style={{
          backgroundColor: "#919190",
          padding: 15,
          height: "auto",
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
          height: "auto",
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

      <View  style={{
        display: "flex",
        marginTop:23,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        backgroundColor: colorScheme === 'dark' ? "#292230" : "white"
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: colorScheme === 'dark' ? "purple" : "#292230",
          padding: 15,
          height: "auto",
          width: "40%",
          borderRadius: 30,
          fontSize: 20,

          // color: theme === "dark" ? "white" : "#292230",
        }}
        onPress={handleSignUp}
      >
        <Text style={{ color: colorScheme === 'dark' ? "#fff" : "#292230", alignSelf:"center", fontSize:20 }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colorScheme === 'dark' ? "#ABCF21" : "#292230",
          padding: 15,
          height: "auto",
          width: "40%",
          borderRadius: 30,
          fontSize: 20,

          // color: theme === "dark" ? "white" : "#292230",
        }}
        onPress={handleSignIn}
      >
        <Text style={{ color: colorScheme === 'dark' ? "purple" : "#292230", alignSelf:"center", fontSize:20}}>login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
