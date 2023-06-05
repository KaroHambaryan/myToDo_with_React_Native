import { KeyboardAvoidingView } from "react-native";
import store from "./app/store.js";
import { Provider } from "react-redux";
import { Navigation } from "./screens/Navigation.js";

export default function App() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}>

		<Provider store={store}>
		<Navigation />
	</Provider>
		</KeyboardAvoidingView>
	)
};