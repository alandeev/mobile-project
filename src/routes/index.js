import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Este navegador usa as APIs nativas UINavigationController no iOS e Fragment no Android para que a navegação construída com createNativeStackNavigato
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SignIn"
				component={SignIn}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default Routes;
