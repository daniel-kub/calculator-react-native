import { Stack } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';
import Calculator from '../../Components/Calculator';

export default function App() {
  return (
    <>
    <Stack.Screen options={{title:'Calculator'}}/>
    <Calculator/>
    </>
    
    
  );
  
}
