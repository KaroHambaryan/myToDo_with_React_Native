import Moment from 'moment';
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {
	const currentDate = Moment().format('MMMM DD, YYYY');
	return (
		<View style={styles.header}>
			<View style={styles}></View>
			<Text style={styles.header_data}>{currentDate}</Text>
			<Text style={styles.header_title}>My Todo List</Text>
			<Image tintColor="#FFFFFF" source={require('../assets/elipse.png')} style={styles.header_elips} />
			<Image tintColor="#FFFFFF" source={require('../assets/elipse_2.png')} style={styles.header_elips_2} />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		minHeight:222,
		backgroundColor: '#4A3780',
		position: 'relative',
	},
	header_title: {
		color: '#FFFFFF',
		fontSize: 30,
		fontWeight: 700,
		textAlign: 'center',
		marginTop:42,
	},
	header_data: {
		marginTop:36,
		color: '#FFFFFF',
		textAlign: 'center',
		fontSize: 16,
	},
	header_elips: {
		position: 'absolute',
		opacity: 0.7,
		width: 150,
		height: 150,
		top: 78,
		right: 240,
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

export default Header;