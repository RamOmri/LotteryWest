import { TabsParamList } from "./types";
import { StackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Product, ProductSelection, Cart } from "../screens";

const Tabs = createBottomTabNavigator<TabsParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

const TabsRouter = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarIcon: () => null,
      }}
    >
      <Tabs.Screen
        options={{ headerShown: false }}
        name="ProductSelection"
        component={ProductSelection}
      />
      <Tabs.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={Cart}
      />
    </Tabs.Navigator>
  );
};

function HomeRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={TabsRouter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeRouter;
