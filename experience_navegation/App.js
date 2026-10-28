import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Pag3 from './screens/pag3/Pag3';
import Pag4 from './screens/pag4/Pag4';
import Pag5 from './screens/pag5/Pag5';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        // options={{
        //headerShown: false,
        // }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
         <Stack.Screen
          name="Pag3"
          component={Pag3}
        />
        <Stack.Screen
          name="Pag4"
          component={Pag4}
        />
        <Stack.Screen
          name="Pag5"
          component={Pag5}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}