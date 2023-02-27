/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-mixed-spaces-and-tabs */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Messages from '../../screens/Messages/Messages';
import TabBar from './TabBar';

const BottomTabNavigator = createBottomTabNavigator();

function BottomNavigator(): ReactElement {
	return (
		<BottomTabNavigator.Navigator
			screenOptions={{ headerShown: false }}
			tabBar={(props) => <TabBar {...props} />}
		>
			<BottomTabNavigator.Screen
				name="Home"
				component={Home}
				options={{
					//
				}}
			/>
			<BottomTabNavigator.Screen
				name="Settings"
				component={Profile}
				options={{
					//
				}}
			/>
			<BottomTabNavigator.Screen
				name="Messages"
				component={Messages}
				options={{
					//
				}}
			/>
		</BottomTabNavigator.Navigator>
	);
}

export default BottomNavigator;
