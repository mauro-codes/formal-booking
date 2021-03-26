import React from "react"
import TabBarNavigation from "./TabBarNavigation"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

const GlobalNavigation = () => {

	return (
		<Stack.Navigator headerMode="none">
		<Stack.Screen name="TabBarNavigation" component={TabBarNavigation} />
		</Stack.Navigator>
	)
}
export default GlobalNavigation
