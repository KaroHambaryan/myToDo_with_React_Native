import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {	createNativeStackNavigator	} from '@react-navigation/native-stack';
import { MyToDoList } from './MyToDoList.jsx';
import { AddNewTask } from './AddNewTask.jsx';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
	return (
		<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="MyToDoList" component={MyToDoList} />
			<Stack.Screen name="AddNewTask" component={AddNewTask} />
		</Stack.Navigator>
	</NavigationContainer>
	);
};