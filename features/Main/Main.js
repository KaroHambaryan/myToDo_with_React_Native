import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { selectUncompletedTasks, selectCompletedTasks } from "../uncompletedTasks/uncompletedTasksSlice";



const Main = () => {
	const unCompletedTasks = useSelector(selectUncompletedTasks);
	const completedTasks = useSelector(selectCompletedTasks);
	return (
		<SafeAreaView style={styles.main}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.completed}>
					{unCompletedTasks.map((elem,) => {
						return <Task elem={elem} key={`${elem.id}`} />
					})}
				</View>
				<Text style={styles.completed_text}>Completed</Text>
				<View style={styles.completed}>
					{completedTasks.map((elem) => {
						return <Task elem={elem} key={`${elem.id}`} />
					})}
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