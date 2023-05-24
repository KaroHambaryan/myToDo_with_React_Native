
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar} from "react-native";
import Task from "./Task";

const Main = () => {
	return (
		<SafeAreaView style={styles.main}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.completed}>
					<Task />
					<Task />
					<Task />
					<Task />
				</View>
				<Text style={styles.completed_text}>Completed</Text>
				<View style={styles.completed}>
					<Task />
					<Task />
					<Task />
					<Task />
					<Task />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		// position: 'absolute',
		// top: 160,
		// borderRadius: 15,
		// overflow: "hidden",
		// backgroundColor: 'red',
		// width: '100%',
		// paddingHorizontal:16,
	},
	scrollView: {
		backgroundColor: 'pink',
    marginHorizontal: 20,
	},
	completed: {
		
	},
	completed_text: {
		fontSize: 16,
		fontWeight: 600,
		marginVertical: 24,
	},
});

export default Main;