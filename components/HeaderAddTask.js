import Moment from 'moment';
import { Text, View, Image, StyleSheet } from "react-native";

const HeaderAddTask = () => {
	const currentDate = Moment().format('MMMM DD, YYYY');
	return (
		<View style={styles.header}>
			<Text style={styles.header_title}>Add New Task</Text>
			<Image tintColor="#FFFFFF" source={require('../assets/elipse.png')} style={styles.header_elips} />
			<Image tintColor="#FFFFFF" source={require('../assets/elipse_2.png')} style={styles.header_elips_2} />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		minHeight:96,
		backgroundColor: '#4A3780',
		position: 'relative',
	},
	header_title: {
		color: '#FFFFFF',
		fontSize: 22,
		fontWeight: 600,
		textAlign: 'center',
		marginTop:36,
	},
	header_elips: {
		position: 'absolute',
		opacity: 0.7,
		width: 150,
		height: 150,
		top: -43,
		right: 270,
	},
	header_elips_2: {
		position: 'absolute',
		opacity: 0.7,
		width: 75,
		height: 75,
		top: 5,
		right: 0,
	},
})

export default HeaderAddTask;