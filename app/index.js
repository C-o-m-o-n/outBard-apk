import React, { useState, useContext } from "react";
import { Link, Stack, useNavigation } from "expo-router";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Appearance,
  Pressable,
  useColorScheme,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import ThemeContext from "./context/ThemeContext";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";

import outbardIcon from "../assets/outbard-icon-nobg.png";

import SideBar from "./components/SideBar";

import app from "../firebase";

export default function Home() {
  const colorScheme = useColorScheme();

  const [isVisible, setisVisible] = useState(false);
  const [value, setvalue] = useState();
  const [userChat, setuserChat] = useState()
  const { theme, toggleTheme } = useContext(ThemeContext);

  function onClose() {
    setisVisible(!isVisible);
  }

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
  };

  const sendUserChat = () =>{
    setuserChat(value);
    setvalue(!value);
  }

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#292230" : "white",
    },
    text: {
      color: theme === "dark" ? "white" : "#292230",
    },
    button: {
      color: theme === "dark" ? "#292230" : "white",
    },
    topContainer: {
      paddingTop: 40,
      paddingHorizontal:2,
      paddingBottom:5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme === "dark" ? "#222230" : "#efefef",
    },


    titleContainer: {
      paddingHorizontal: 2,
      paddingVertical: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: "#605079",
    },
    modalBg: {
      backgroundColor: theme === "dark" ? "#222230" : "#efefef",
    },
    menuItem: {
      display: "flex",
      flexDirection: "row",
      marginHorizontal: 2,
      alignItems: "center",
      marginTop: 20,
      borderRadius: 10,
      padding: 5,
      marginBottom: 5,
    },
    menuItemText: {
      color: theme === "dark" ? "white" : "#292230",
      fontSize: 20,
    },
    menuItemIcon: {
      color: theme === "dark" ? "white" : "#292230",
      padding: 15,
      borderRadius: 20,
    },
  });

  function modalChildren() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 50,
              backgroundColor: theme === "dark" ? "#fff" : "#292230",
            }}
          >
            <FontAwesome6
              style={{ color: theme === "dark" ? "#292230" : "white" }}
              name="user"
              size={24}
            />
          </TouchableOpacity>
          
          <Pressable
            style={{
              padding: 10,
              borderRadius: 50,
              backgroundColor: theme === "dark" ? "#fff" : "#292230",
            }}
            onPress={onClose}
          >
            <MaterialIcons
              style={{ color: theme === "dark" ? "#292230" : "white" }}
              name="close"
              color="#fff"
              size={22}
            />
          </Pressable>
        </View>

        <View
          style={{
            marginVertical: 30,
            marginHorizontal: 11,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            bottom: 20,
          }}
        >
          <TextInput
            style={{
              position: "relative",
              backgroundColor: "#919190",
              padding: 15,
              width: "80%",
              borderRadius: 30,
              fontSize: 20,
              color: theme === "dark" ? "white" : "#292230",
            }}
            placeholder="Search"
          />

          <TouchableOpacity>
            <MaterialIcons
              style={{
                color: theme === "dark" ? "#292230" : "white",
                backgroundColor: theme === "dark" ? "#fff" : "#292230",
                alignSelf: "center",
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 50,
              }}
              name="search"
              size={28}
            />
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity style={styles.menuItem}>
          <FontAwesome6 style={styles.menuItemIcon} name="edit" size={24} />
          <Link style={styles.menuItemText} href="/text">
            Generate Text
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome6 style={styles.menuItemIcon} name="edit" size={24} />
          <Link style={styles.menuItemText} href="/signup">
            Signup
          </Link>
        </TouchableOpacity> */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <SideBar
          isVisible={isVisible}
          onClose={onClose}
          children={modalChildren()}
          modalBg={styles.modalBg}
        />

        <View style={{
            display: "flex",
            gap: 15,
            flexDirection: "row",
            alignItems: "center",
          }}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 50,
            backgroundColor: theme === "dark" ? "#fff" : "#292230",
          }}
          onPress={() => setisVisible(!isVisible)}
        >
          <FontAwesome6
            style={{
              color: theme === "dark" ? "#292230" : "white",
              paddingHorizontal: 3,
            }}
            name="grip-lines"
            size={24}
          />
        </TouchableOpacity>
        <Text style={{color: theme === "dark" ? "white" : "#292230", fontSize: 20, fontWeight:"bold"}}>OutBard 2.0 </Text>
        
        </View>
        
        <View
          style={{
            display: "flex",
            gap: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 50,
              backgroundColor: theme === "dark" ? "#fff" : "#292230",
            }}
          >
            <FontAwesome6
              style={{ color: theme === "dark" ? "#292230" : "white" }}
              name="edit"
              size={24}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 50,
              backgroundColor: theme === "dark" ? "#fff" : "#292230",
            }}
            onPress={handleToggleTheme}
          >
            {theme === "dark" ? (
              <FontAwesome6
                style={{ color: theme === "dark" ? "#292230" : "white" }}
                name="sun"
                size={24}
              />
            ) : (
              <FontAwesome6
                style={{
                  color: theme === "dark" ? "#292230" : "white",
                  paddingHorizontal: 3,
                }}
                name="moon"
                size={24}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
      {!userChat && (
        <View
        style={{
          alignSelf: "center",
          width: 150,
          backgroundColor: theme === "dark" ? "transparent" : "#292230",
          borderRadius: 100,
        }}
      >
        <Image style={{ width: 150, height: 150, marginTop:20 }} source={outbardIcon} />
      </View>
      )}

      {userChat && (
        <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "left",
          width: "85%",
          marginRight: 5,
          marginTop:10,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 3,
            alignSelf: "flex-start",
            marginRight: 10,
            marginLeft: 5,
            borderRadius: 50,
            backgroundColor: theme === "dark" ? "#fff" : "#292230",
          }}
        >
          <FontAwesome6
            style={{ color: theme === "dark" ? "#292230" : "white", paddingHorizontal: 3, paddingVertical:2 }}
            name="user"
            size={15}
          />
        </TouchableOpacity>
        <Text style={{ color: theme === "dark" ? "white" : "#292230" }}>
           {userChat}
        </Text>
      </View>
      )}
      </ScrollView>

      <View
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          width:"100%",
          backgroundColor: theme === "dark" ? "#222230" : "#efefef",
          paddingTop:5,
          paddingBottom:20,
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "center",
            right: 80,
            top:9,
            zIndex: 1,
            padding: 10,
            borderRadius: 50,
            backgroundColor: theme === "dark" ? "#fff" : "#292230",
          }}
        >
          <MaterialIcons
            style={{ color: theme === "dark" ? "#292230" : "white" }}
            name="mic"
            size={28}
          />
        </TouchableOpacity>
        <TextInput
          style={{
            position: "relative",
            backgroundColor: "#919190",
            padding: 15,
            width: "80%",
            borderRadius: 30,
            fontSize: 20,
            color: theme === "dark" ? "white" : "#292230",
          }}
          value={value}
          onChangeText={(text) => {
            setvalue(text);
          }}
        />

        <TouchableOpacity>
          <MaterialIcons
          onPress={sendUserChat}
            style={{
              color: theme === "dark" ? "#292230" : "white",
              backgroundColor: theme === "dark" ? "#fff" : "#292230",
              alignSelf: "center",
              marginHorizontal: 10,
              padding: 10,
              borderRadius: 50,
            }}
            name="send"
            size={28}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}
