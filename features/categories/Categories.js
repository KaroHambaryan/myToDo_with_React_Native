import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from './categoriesSlice';
import { changeCategories } from './categoriesSlice';

import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";

export const Categories = () => {
	const dispatch = useDispatch();


	return 		<View style={styles.category_container}>
	<View style={styles.category_wrapper}>
		<Text style={[styles.label_style, styles.category_title]}>Category</Text>
		
		<TouchableOpacity onPress={()=>dispatch(changeCategories("work"))} style={styles.category}>
			<Image source={require('../../assets/list.png')} />
		</TouchableOpacity>

		<TouchableOpacity onPress={()=>dispatch(changeCategories("calendar"))} style={styles.category}>
			<Image source={require('../../assets/calendar.png')} />
		</TouchableOpacity>

		<TouchableOpacity onPress={()=>dispatch(changeCategories("win"))} style={styles.category}>
			<Image source={require('../../assets/win.png')} />
		</TouchableOpacity>
	</View>
</View>
};


const styles = StyleSheet.create({
	category_container: {
		marginTop: 24,
	},
	label_style: {
		color: "#1B1B1D",
		fontSize: 16,
		fontWeight: "bold",
	},
	category_wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	category: {
		margin: 16,
	},
	category_title: {
		marginRight: 8
	},
});
