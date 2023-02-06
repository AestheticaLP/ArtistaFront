import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './app/screens/Profile';
import Home from './app/screens/Home';
import Messages from './app/screens/Messages/Messages';
import { RootStackParamList } from './app/types/StackParamList';

const BottomTabNavigator = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function BottomNavigator(): ReactElement {
	return (
		<BottomTabNavigator.Navigator screenOptions={{ headerShown: false }}>
			<BottomTabNavigator.Screen name="Home" component={Home} />
			<BottomTabNavigator.Screen name="Settings" component={Profile} />
			<BottomTabNavigator.Screen name="Messages" component={Messages} />
		</BottomTabNavigator.Navigator>
	);
}

function App(): ReactElement {
	return (
	<NavigationContainer>
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="StackApp" component={BottomNavigator} />
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="Messages" component={Messages} />
		</Stack.Navigator>
	</NavigationContainer>
	);
}
export default App;
