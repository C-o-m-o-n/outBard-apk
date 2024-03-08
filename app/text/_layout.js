import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';


export default function TextLayout() {
  return (
<Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarActiveBackgroundColor: 'green' ,tabBarStyle: { backgroundColor: '#292230' },
}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Text',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="image"
        options={{
          headerShown: false,
          title: 'image',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      
    </Tabs> 
  );
}
