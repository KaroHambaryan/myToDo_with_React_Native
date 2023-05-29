import { useDispatch, useSelector } from 'react-redux';
import { selectText } from './newTaskTitleSlice';
import { readText } from './newTaskTitleSlice';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
} from "react-native";


export const NewTaskTitle = () => {
	const dispatch = useDispatch();
	const text = useSelector(selectText)

	return <View style={styles.task_title}>
		<Text style={[styles.label_style, styles.margin_bottom_title]}>Task Title</Text>
		<TextInput value={text} onChangeText={(v) => dispatch(readText(v))} style={styles.input} />
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
		width: 358,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#FFFFFF',
		borderRadius: 6,
		borderColor:'#E0E0E0'
	},
});
