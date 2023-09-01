import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/telas/home/home';
import Resposta from './src/telas/resposta/resposta';

const Stack = createNativeStackNavigator();

export default function App() {
  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} 
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen name="Resposta" component={Resposta}
           options={{
            title:"Advinhe...",
            headerTintColor:"#FFF",
            headerStyle:{
              backgroundColor:"pink",
            },
            headerShown:true,
            headerTitleAlign:"center",
          
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
</>
}