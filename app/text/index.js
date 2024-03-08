import React from 'react';
import { Stack, useNavigation } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>text Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
})