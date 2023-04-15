import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Screens/Home';
import Signup from './Screens/Signup';
// import Ver_N from './Screens/Ver_N';
import Ver_pen from './Screens/Ver_pen'
// import Contact from './Screens/Contact'
import Check from './Screens/Check'
import Phone from './Screens/Phone'
import Ipsaver from './Screens/Ipsaver'
import Mainscreen from './Screens/Mainscreen';


const Stack = createStackNavigator()
function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Check" component={Check} options={{ headerShown: false }} />

      {/* <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Mainscreen" component={Mainscreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Ipsaver" component={Ipsaver} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Phone" component={Phone} options={{ headerShown: false }} />
      <Stack.Screen name="Ver_pen" component={Ver_pen} options={{ headerShown: false }} />

      {/* <Stack.Screen name="Phone_ver" component={Phone_ver} options={{ headerShown: false }} />
      <Stack.Screen name="Ver_pen" component={Ver_pen} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="Ver_N" component={Ver_N} options={{ headerShown: false }} /> */}







    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Mystack />
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
