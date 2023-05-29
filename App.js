import store from "./app/store.js";
import { Provider } from "react-redux";
import { Navigation } from "./screens/Navigation.js";

export default function App() {
	return (
		<Provider store={store}>
		<Navigation />
	</Provider>
	)
};