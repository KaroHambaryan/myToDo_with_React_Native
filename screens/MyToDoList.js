import Header from '../components/Header';
import Main from "../features/Main/Main";


import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export const MyToDoList = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header />
			<Main />
			<TouchableOpacity style={styles.to_add} onPress={() => { navigation.navigate('Add_New_Task') }}>
				<Text style={styles.to_add_text}>Add New Task</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		justifyContent: 'space-between',
	},

	to_add: {
		marginHorizontal:16,
		flex:0,
		backgroundColor: '#4A3780',
		padding: 10,
		height: 56,
		borderRadius: 50,
		bottom: 24,
		width: 358,
		justifyContent:'center',
	},
	to_add_text: {
		fontSize: 16,
		color: '#FFFFFF',
		fontWeight: 700,
		textAlign: 'center',
	}
});