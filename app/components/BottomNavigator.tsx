import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Messages from '../screens/Messages/Messages';

const BottomTabNavigator = createBottomTabNavigator();

function BottomNavigator(): ReactElement {
	return (
		<BottomTabNavigator.Navigator screenOptions={{ headerShown: false }}>
			<BottomTabNavigator.Screen name="Home" component={Home} />
			<BottomTabNavigator.Screen name="Settings" component={Profile} />
			<BottomTabNavigator.Screen name="Messages" component={Messages} />
		</BottomTabNavigator.Navigator>
	);
}

export default BottomNavigator;
