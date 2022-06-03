
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

import HomeComponent from './app/home/HomeComponent';
import PrincipalComponent from './app/principal/PrincipalComponent';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Home" 
          component={HomeComponent}
          options={{
            title:'Bienvenidos',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Principal'
          component={PrincipalComponent}
          options={{
            title:"MarvelApp",
            headerStyle:{
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#FFF',
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerLeft:null
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
