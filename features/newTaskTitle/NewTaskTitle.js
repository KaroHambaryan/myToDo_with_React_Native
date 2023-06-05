import { useDispatch, useSelector } from 'react-redux';
import { selectText } from './newTaskTitleSlice';
import { readText } from './newTaskTitleSlice';
import { resetTaskForEdit } from '../uncompletedTasks/uncompletedTasksSlice';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
} from "react-native";
import { useEffect } from 'react';


export const NewTaskTitle = ({changeTitle}) => {
	const dispatch = useDispatch();
	const text = useSelector(selectText);
	const writeText = (v) => {
		dispatch(readText(v));
		dispatch(resetTaskForEdit(v));
	}

	return <View style={styles.task_title}>
		<Text style={[styles.label_style, styles.margin_bottom_title]}>Task Title</Text>
		<TextInput value={text} onChangeText={writeText} style={styles.input} />
	</View>
};

const styles = StyleSheet.create({

	margin_bottom_title: {
		marginBottom:8,
	},
	label_style: {
		color: "#1B1B1D",
		fontSize: 16,
		fontWeight: "bold",
	},
	input: {
		height: 55,
		width: '100%',
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#FFFFFF',
		borderRadius: 6,
		borderColor:'#E0E0E0'
	},
});
