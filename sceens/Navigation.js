import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {	createNativeStackNavigator	} from '@react-navigation/native-stack';
import { MyToDoList } from './MyToDoList.js';
import { AddNewTask } from './AddNewTask.js';

const Stack = createNativeStackNavigator();

export const Navigation = () => {

	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName="My_Todo_List">
				{/* <Stack.Screen name="My_Todo_List" component={MyToDoList} options={{
					headerTitleAlign: 'center',
				}} /> */}
			<Stack.Screen name="Add_New_Task" component={AddNewTask} />
		</Stack.Navigator>
	</NavigationContainer>
	);
};