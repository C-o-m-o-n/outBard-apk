import { Stack } from 'expo-router';
import {ThemeProvider} from './context/ThemeContext';


export default function Layout() {
  return (
    <ThemeProvider>
      <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen name="index" options={{}} />
    </Stack>
    </ThemeProvider>
  );
}
