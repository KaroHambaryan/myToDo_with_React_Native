
import { View, Text, StyleSheet, Image } from "react-native";
import Task from "./Task";

const Main = () => {
	return (
		<View style={styles.main}>
			<Task />
			<View style={styles.completed}>
				<Text style={styles.completed_text}>Completed</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		position: 'absolute',
		top: 160,
		borderRadius: 15,
		overflow: "hidden",
		backgroundColor: 'red',
		width: '100%',
		paddingHorizontal:16,
	},
	completed: {
		marginVertical: 24,
	},
	completed_text: {
		fontSize: 16,
		fontWeight:600,
	},
});

export default Main;