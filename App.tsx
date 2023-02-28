import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './app/screens/Profile';
import Home from './app/screens/Home';
import Messages from './app/screens/Messages/Messages';
import { RootStackParamList } from './app/types/StackParamList';
import BottomNavigator from './app/components/bottomNavigationBar/BottomNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): ReactElement {
	return (
	<NavigationContainer>
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="BottomNavigator" component={BottomNavigator} />
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="Messages" component={Messages} />
		</Stack.Navigator>
	</NavigationContainer>
	);
}
export default App;
