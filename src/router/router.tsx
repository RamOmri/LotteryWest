import { TabsParamList } from "./types";
import { StackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProductSelection } from "../screens";

const Tabs = createBottomTabNavigator<TabsParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

const TabsRouter = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="ProductSelection" component={ProductSelection} />
    </Tabs.Navigator>
  );
};

const HomeRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="Home"
        component={TabsRouter}
        options={{ headerShown: false }}
      />
    </NavigationContainer>
  );
};

export default HomeRouter;
